import { Component, inject, signal, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalService } from 'twng-elements-ui';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './shared/Prueba/Prueba.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, PruebaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'twngelements';

  private modalService: ModalService = inject(ModalService);

  @ViewChild('modalContainer', { read: ViewContainerRef, static: true })
  modalContainer!: ViewContainerRef;

  @ViewChild('pruebaTemplate', { static: true })
  pruebaTemplate!: TemplateRef<any>;

  openModal() {
    this.modalService.openModal(
      {
        isModalOpen: true,
        title: 'Título',
        message: '¿Seguro?',
        confirmText: 'Aceptar',
        cancelText: 'Cancelar',
        onConfirmCallback: () => {
          this.fakeAsyncOperation();
        },
        contentTemplate: this.pruebaTemplate,
      },
      this.modalContainer
    );
  }

  fakeAsyncOperation(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
}


