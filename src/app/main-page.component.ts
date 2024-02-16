import { Component } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { TransactionsPageComponent } from './transactions-page.component';
import { WelcomeSectionComponent } from './welcome-section.component';

@Component({
  selector: 'solana-home-bc',
  template: `
    <solana-welcome-section-bc></solana-welcome-section-bc>
    <solana-features-section-bc></solana-features-section-bc>
    <solana-transactions-section-bc></solana-transactions-section-bc>
  `,
  imports: [
    WelcomeSectionComponent,
    FeaturesSectionComponent,
    TransactionsPageComponent,
  ],
  standalone: true,
})
export class MainPageComponent {}
