import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'twng-card',
  imports: [],
  templateUrl: './twng-card.component.html',
  styleUrl: './twng-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwngCardComponent {
  readonly title = input<string>('');
  readonly description = input<string>('');
  readonly alignment = input<'right' | 'left' | 'full'>('right');
  readonly colorBadge = input<string>('bg-gr-primary');
  readonly colorButton = input<string>('bg-gr-primary');
  readonly textBadge = input<string>('');
  readonly imageUrl = input<string>(
    'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=8'
  );
}
