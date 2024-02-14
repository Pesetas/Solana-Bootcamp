import { Component } from '@angular/core';
import { FeatureSectionComponent } from './feature-section.component';
import { WelcomeSectionComponent } from './welcome-section.component';

@Component({
  selector: 'solana-home-bc',
  template: `
    <solana-welcome-section-bc></solana-welcome-section-bc>
    <solana-features-section-bc></solana-features-section-bc>
  `,
  imports: [WelcomeSectionComponent, FeatureSectionComponent],
  standalone: true,
})
export class MainPageComponent {}
