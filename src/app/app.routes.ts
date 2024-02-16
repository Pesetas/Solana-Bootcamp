import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./main-page.component').then((m) => m.MainPageComponent),
  },
  {
    path: 'saldo',
    loadComponent: () =>
      import('./balance-page.component').then((m) => m.BalancePageComponent),
  },
  {
    path: 'historial',
    loadComponent: () =>
      import('./transactions-page.component').then(
        (m) => m.TransactionsPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
