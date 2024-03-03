import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShyftApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _api_key = 'nm5eW5nqGHH8MPFb';
  private readonly _header = { 'x-api-key': this._api_key };
  private readonly _mint = '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs';

  getEndpoint() {
    const url = new URL('https://rpc.shyft.to');
    url.searchParams.set('api_key', this._api_key);
    return url.toString();
  }

  getBalance(publicKey: string | undefined | null) {
    if (!publicKey) {
      return of(null);
    }

    const url = new URL('https://api.shyft.to/sol/v1/wallet/token_balance');

    url.searchParams.append('network', 'mainnet-beta');
    url.searchParams.append('wallet', publicKey);
    url.searchParams.append('token', this._mint);

    return this._httpClient
      .get<{
        result: { balance: number; info: { image: string } };
      }>(url.toString(), { headers: this._header })
      .pipe(map(({ result }) => result));
  }
}
