
import { CommonModule, NgClass} from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ElementRef, forwardRef, HostListener, Input, input, OnInit, output, signal, WritableSignal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'twng-search-dropdown',
  imports: [FormsModule, NgClass],
  standalone: true,
  templateUrl: './twng-search-dropdown.component.html',
  styleUrl: './twng-search-dropdown.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TwngSearchDropdownComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwngSearchDropdownComponent
  implements OnInit, ControlValueAccessor
{
  @Input() items: any[] = [];
  @Input() placeholder: string = '';
  @Input() placeholderSearch: string = '';
  noResultsText = input('No se encontraron resultados');
  disabled = input(false);
  selectedItem = signal<any | null>(null);
  displayText = signal('');

  showDropdown = signal(false);
  searchTerm = signal('');

  itemSelected = output<any>();
  searchChanged = output<string>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.resetSelection();
  }

  resetSelection() {
    this.selectedItem.set(null);
    this.displayText.set('');
    this.searchTerm.set('');
    this.onChange(null);
  }

  toggleDropdown() {
    if (this.disabled()) return;
    this.showDropdown.update((prev) => !prev);
    if (this.showDropdown()) this.searchTerm.set('');
  }

  filterItems(term: string) {
    this.searchTerm.set(term);
    this.searchChanged.emit(term);
  }

  selectItem(item: any) {
    this.selectedItem.set(item);
    this.displayText.set(item.name || item.nombre || '');
    this.itemSelected.emit(item);
    this.onChange(item);
    this.onTouched();
    this.showDropdown.set(false);
  }

  filteredItems = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return term
      ? this.items.filter((item) => item.name?.toLowerCase().includes(term))
      : this.items;
  });

  hasItems = computed(() => this.filteredItems().length > 0);

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.selectedItem.set(value);
    this.displayText.set(value ? value.name || value.nombre || '' : '');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.showDropdown.set(false);
    }
  }
}
