import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, input, Output, output} from '@angular/core';

@Component({
  selector: 'twng-dropdown',
  imports: [CommonModule],
  templateUrl: './twng-dropdown.component.html',
  styleUrl: './twng-dropdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwngDropdownComponent {
  @Input() isOpen: boolean = false;
  @Input() options: any[] = [];

  @Output() isOpenChange = new EventEmitter<boolean>();

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative.inline-block')) {
      this.isOpen = false;
      this.isOpenChange.emit(false);
    }
  }
}
