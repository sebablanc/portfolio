import { Component, Input } from '@angular/core';

export const MODAL_SIZE = {
  XL: 'modal-xl',
  LG: 'modal-lg',
  SM: 'modal-sm'
}

@Component({
  selector: 'app-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrls: ['./modal-layout.component.scss']
})
export class ModalLayoutComponent {
  @Input() modalSize: string = MODAL_SIZE.LG
}
