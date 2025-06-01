import { Component, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwngModalComponent } from 'twng-elements-ui';
import { CommonModule, NgClass } from '@angular/common';
import { TwngCardComponent } from '../../projects/twng-elements-ui/src/lib/twng-card/twng-card.component';
import { TwngSearchDropdownComponent } from '../../projects/twng-elements-ui/src/lib/twng-search-dropdown/twng-search-dropdown.component';
import { TwngDropdownComponent } from "../../projects/twng-elements-ui/src/lib/twng-dropdown/twng-dropdown.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TwngModalComponent,
    TwngSearchDropdownComponent,
    TwngDropdownComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly isModalOpen = signal(false);
  readonly isLoading = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  onModalClose() {
    this.isModalOpen.set(false);
  }

  onModalSave() {}

  fakeAsyncOperation(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  listaDeOpciones = [
    {
      id: 1,
      name: 'Opción 1',
    },
    {
      id: 2,
      name: 'Opción 2',
    },
    {
      id: 3,
      name: 'Opción 3',
    },
  ];

  onItemSeleccionado(item: string) {
    console.log('Seleccionado:', item);
  }

  onBusqueda(termino: string) {
    console.log('Término de búsqueda:', termino);
  }

  dropdownState = false;
  menuItems = [
    { label: 'Perfil', value: 'profile', url: '#' },
    { label: 'Configuración', value: 'settings', url: '#' },
  ];

  handleSelection(event: any) {
    console.log('Seleccionado:', event);
  }

  onToggleChange(state: boolean) {
    this.dropdownState = state;
  }
}
