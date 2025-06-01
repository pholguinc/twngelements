import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, input, Input, output, Output, signal, TemplateRef, Type, ViewEncapsulation } from '@angular/core';
type ModalSize = 'sm' | 'md' | 'lg'| 'xl';
@Component({
  selector: 'twng-modal',
  imports: [CommonModule],
  templateUrl: './twng-modal.component.html',
  styleUrl: './twng-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TwngModalComponent {
  readonly headerClass = input<string>(
    'bg-gradient-to-r from-purple-400 to-purple-700 border-gray-200'
  );
  readonly confirmButtonClass = input<string>(
    'bg-gradient-to-r from-purple-400 to-purple-700 hover:from-purple-500 hover:to-purple-800'
  );
  readonly cancelButtonClass = input<string>(
    'bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700'
  );
  readonly isVisible = input<boolean>(false);
  readonly useAnimations = input<boolean>(true);
  readonly title = input<string>('');
  readonly message = input<string>('');
  readonly confirmText = input<string>('');
  readonly cancelText = input<string>('');
  readonly isLoaderActive = signal(false);
  readonly isVisibleActions = input<boolean>(false);
  public readonly size = input<ModalSize>('md');

  readonly close = output<void>();
  readonly save = output<void>();

  private _isAnimating = signal(false);

  get isAnimating() {
    return this._isAnimating();
  }

  get sizeClass(): string {
    const sizeMap: Record<ModalSize, string> = {
      sm: 'max-w-md',
      md: 'max-w-3xl',
      lg: 'max-w-5xl',
      xl: 'max-w-7xl',
    };

    return sizeMap[this.size()];
  }

  ngOnChanges(changes: any) {
    if (changes.isVisible) {
      if (this.isVisible() && this.useAnimations()) {
        this._isAnimating.set(true);
      }
      if (!this.isVisible()) {
        this._isAnimating.set(false);
      }
    }
  }

  onClose() {
    if (this.useAnimations()) {
      this._isAnimating.set(false);
      setTimeout(() => this.close.emit(), 300);
    } else {
      this.close.emit();
    }
  }

  onSave() {
    this.isLoaderActive.set(true);

    setTimeout(() => {
      this.isLoaderActive.set(false);
      this.save.emit();
    }, 2000);
  }
}
