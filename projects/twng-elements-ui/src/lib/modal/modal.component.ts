import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, input, Input, Output, TemplateRef, Type, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  readonly isVisible = input<boolean>(false);
  readonly title = input<string>('');
  readonly message = input<string>('');
  readonly confirmText = input<string>('');
  readonly cancelText = input<string>('');
  readonly isLoaderActive = input<boolean>(false);
  readonly isAnimating = input<boolean>(false);
  readonly isVisibleActions = input<boolean>(false);
  readonly contentTemplate?: TemplateRef<any>;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onSave() {
    this.save.emit();
  }
}
