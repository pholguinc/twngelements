import { Injectable } from "@angular/core";

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
export class TwngModalService {
  private onConfirmCallback: (() => void) | null = null;

  isModalOpen = false;
  title = '';
  message = '';
  confirmText = '';
  cancelText = '';
  isLoaderActive = false;
  isAnimating = false;

  openModal(data: {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    onConfirmCallback: () => void;
  }) {
    this.isModalOpen = true;
    this.title = data.title;
    this.message = data.message;
    this.confirmText = data.confirmText;
    this.cancelText = data.cancelText;
    this.onConfirmCallback = data.onConfirmCallback;
    this.isAnimating = true;
  }

  async confirm() {
    if (this.onConfirmCallback) {
      this.isLoaderActive = true;
      await Promise.resolve(this.onConfirmCallback());
      this.isLoaderActive = false;
    }
    this.closeModal();
  }

  closeModal() {
    this.isAnimating = false;
    setTimeout(() => {
      this.isModalOpen = false;
    }, 300);
  }
}
