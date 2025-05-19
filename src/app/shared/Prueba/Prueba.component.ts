import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  imports: [],
  standalone: true,
  template: `<p>Prueba worksdddd!</p>`,
  styleUrl: './Prueba.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebaComponent {}
