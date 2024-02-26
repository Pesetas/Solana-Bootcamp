import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConnectionStore, WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { FeaturesSectionComponent } from './features-section.component';
import { ShyftApiService } from './shyft-api-service';
import { TransferModalComponent } from './transfer-modal.component';

@Component({
  selector: 'solana-balance-bc',
  template: `
    <section class="px-16 py-24 bg-white bg-opacity-5">
      <h2 class="text-center text-3xl">Saldo de tu Wallet</h2>
      @if (!balance()) {
        <div class="top-16 left-16 flex justify-center items-center gap-4">
          <p>Conecta tu wallet a ver si salimos de pobres</p>
        </div>
      } @else {
        <div class="top-16 left-16 flex justify-center items-center gap-4">
          <img [src]="balance()?.info?.image" class="w-8 h-8" />
          <p class="text-xl">{{ balance()?.balance }}</p>
        </div>
        <footer class="flex justify-center">
          <button mat-raised-button color="primary" (click)="onTransfer()">
            Transferir fondos
          </button>
        </footer>
      }
    </section>
    <solana-features-section-bc></solana-features-section-bc>
  `,
  standalone: true,
  imports: [FeaturesSectionComponent, MatButton],
})
export class BalancePageComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);
  private readonly _matDialog = inject(MatDialog);
  private readonly _connectionStore = inject(ConnectionStore);

  readonly balance = computedAsync(
    () => this._shyftApiService.getBalance(this._publicKey()?.toBase58()),
    { requireSync: false },
  );

  ngOnInit() {
    this._connectionStore.setEndpoint(this._shyftApiService.getEndpoint());
  }

  onTransfer() {
    console.log('has clickado en Transferir');
    this._matDialog.open(TransferModalComponent);
  }
}
