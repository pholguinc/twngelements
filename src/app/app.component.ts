import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ModalComponent, TwngElementsUiComponent } from 'twng-elements-ui';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'twngelements';

  isModalVisible = signal(true);
  isModalActionsVisible = signal(true);
  isModalLoading = signal(false);



  modalTitle = signal('Título del Modal');

  openModal() {
    this.isModalVisible.set(true);
  }

  closeModal() {
    this.isModalVisible.set(false);
  }

  guardarCambios() {
    this.isModalLoading.set(true);
    // Simula un guardado:
    setTimeout(() => {
      this.isModalLoading.set(false);
      this.isModalVisible.set(false);
    }, 2000);
  }
}
