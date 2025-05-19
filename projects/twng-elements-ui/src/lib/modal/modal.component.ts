import { ChangeDetectionStrategy, Component, input, output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  // Signals

  public readonly title = input<string>('');
  public readonly isVisible = input<boolean>(false);
  public readonly isVisibleActions = input<boolean>(false);
  public readonly isLoaderActive = input<boolean>(false);

  public close = output<void>();
  public save = output<void>();

  onClose() {
    this.close.emit();
  }

  onSave() {
    this.save.emit();
  }
}
