import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'twng-button',
  imports: [],
  templateUrl: './twng-button.component.html',
  styleUrl: './twng-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwngButtonComponent {
  readonly classButton = input<string>(
    'font-bold text-md px-5 py-2 rounded-lg px-5 py-2'
  );
  readonly colorButton = input<string>('bg-gr-primary');
}
