import { ApplicationRef, ChangeDetectorRef, ComponentRef, Injectable, Injector,ViewContainerRef } from '@angular/core';
import { ModalComponent } from './modal.component';
export interface ModalData {
  isModalOpen: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirmCallback: () => void;
  contentTemplate?: any;
}
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentRef: ComponentRef<ModalComponent> | null = null;

  constructor(private injector: Injector, private appRef: ApplicationRef) {}

  openModal(modalData: ModalData, viewContainerRef: ViewContainerRef) {
    this.componentRef = viewContainerRef.createComponent(ModalComponent, {
      injector: this.injector,
    });

    const modalInstance = this.componentRef.instance;

    this.componentRef.setInput('isVisible', true);
    this.componentRef.setInput('isAnimating', true);
    this.componentRef.setInput('title', modalData.title);
    this.componentRef.setInput('message', modalData.message);
    this.componentRef.setInput('confirmText', modalData.confirmText);
    this.componentRef.setInput('cancelText', modalData.cancelText);
    this.componentRef.setInput('isVisibleActions', true);

    if (modalData.contentTemplate) {
      this.componentRef.setInput('contentTemplate', modalData.contentTemplate);
    }

    setTimeout(() => {
      this.componentRef?.setInput('isAnimating', true);
    }, 0);

    modalInstance.save.subscribe(() => {
      this.componentRef?.setInput('isLoaderActive', true);
      Promise.resolve(modalData.onConfirmCallback()).finally(() => {
        this.componentRef?.setInput('isLoaderActive', false);
        this.animateAndClose();
      });
    });

    modalInstance.close.subscribe(() => {
      this.animateAndClose();
    });
  }

  private animateAndClose() {
    if (this.componentRef) {
      this.componentRef.setInput('isAnimating', false);

      const changeDetector = this.componentRef.injector.get(ChangeDetectorRef);
      changeDetector.detectChanges();

      setTimeout(() => {
        this.closeModal();
      }, 300);
    }
  }

  closeModal() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
  onConfirm() {
    console.log('Modal Confirmed!');
    this.closeModal();
  }

  onCancel() {
    console.log('Modal Canceled!');
    this.closeModal();
  }
}
