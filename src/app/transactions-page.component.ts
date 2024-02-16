import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { FeaturesSectionComponent } from './features-section.component';
import { ShyftApiService } from './shyft-api-service';

@Component({
  selector: 'solana-transactions-section-bc',
  template: `
    <section class="px-16 py-24 bg-white bg-opacity-5">
      <h2 class="text-center text-3xl">Historial de movimientos</h2>
      @if (!account()) {
        <div class="top-16 left-16 flex justify-center items-center gap-4">
          <p>Conecta tu wallet para ver los movimientos</p>
        </div>
      } @else {
        <div class="top-16 left-16 flex justify-center items-center gap-4">
          <p class="text-xl">{{ account()?.timestamp }}</p>
          <p>
            Aquí debería salir algo pero creo que no sale porque no tengo
            historial
          </p>
        </div>
      }
    </section>
    <solana-features-section-bc></solana-features-section-bc>
  `,
  standalone: true,
  imports: [FeaturesSectionComponent],
})
export class TransactionsPageComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._shyftApiService.getTransactions(this._publicKey()?.toBase58()),
    { requireSync: false },
  );
}
