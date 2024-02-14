import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api-service';
@Component({
  selector: 'solana-balance-bc',
  template: `
    <section class="px-16 py-24 bg-white bg-opacity-5">
      <h2 class="text-center text-3xl">Saldo</h2>
      @if (account()) {
        <div class="top-16 left-16 flex justify-center items-center gap-4">
          <img [src]="account()?.info?.image" class="w-8 h-8" />
          <p class="text-xl">{{ account()?.balance }}</p>
        </div>
      }
      <p class="text-center ">A ver si salimos de pobres</p>
    </section>
  `,
  standalone: true,
})
export class BalancePageComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: false },
  );
}
