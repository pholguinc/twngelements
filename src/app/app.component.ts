import { Component, inject, signal, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwngButtonComponent, TwngModalComponent } from 'twng-elements-ui';
import { CommonModule } from '@angular/common';
import { TwngCardComponent } from "../../projects/twng-elements-ui/src/lib/twng-card/twng-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, TwngModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'twngelements';

  // @ViewChild('modalContainer', { read: ViewContainerRef, static: true })
  // modalContainer!: ViewContainerRef;

  // @ViewChild('pruebaTemplate', { static: true })
  // pruebaTemplate!: TemplateRef<any>;

  // openModal() {
  //   this.modalService.openModal(
  //     {
  //       isModalOpen: true,
  //       title: 'Título',
  //       message: '¿Seguro?',
  //       confirmText: 'Aceptar',
  //       cancelText: 'Cancelar',
  //       onConfirmCallback: () => {
  //         this.fakeAsyncOperation();
  //       },
  //       contentTemplate: this.pruebaTemplate,
  //     },
  //     this.modalContainer
  //   );
  // }

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
}


