import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';

import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent, MatAnchor],
  selector: 'solana-bc-root',
  template: `
    <header class="px-16 pt-24 pb-8">
      <h1 class="text-center text-5xl mb-4">Mi cartera</h1>

      <div class="flex justify-center mb-4">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>

      <nav>
        <ul class="flex justify-center items-center gap-4">
          <li>
            <a [routerLink]="['']" mat-raised-button>Inicio</a>
          </li>
          <li>
            <a [routerLink]="['saldo']" mat-raised-button>Saldo</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
