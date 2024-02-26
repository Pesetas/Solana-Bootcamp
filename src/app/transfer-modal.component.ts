import { Component } from '@angular/core';
import {
  TransferFormComponent,
  TransferFormPayload,
} from './transfer-form.component';

@Component({
  selector: 'solana-transfer-bc',
  template: `
    <div class="px-8 pt-16 pb-8">
      <h2 class="text-3xl text-center mb-4">Transferir Fondos</h2>
      <solana-transfer-form-bc
        (submitForm)="onTransfer($event)"
      ></solana-transfer-form-bc>
    </div>
  `,
  standalone: true,
  imports: [TransferFormComponent],
})
export class TransferModalComponent {
  onTransfer(payload: TransferFormPayload) {
    console.log('holi', payload);
  }
}
