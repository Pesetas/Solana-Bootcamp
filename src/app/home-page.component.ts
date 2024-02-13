import { Component } from '@angular/core';
import { FeatureSectionComponent } from './feature-section.component';
import { HeroSectionComponent } from './hero-section.component';

@Component({
  selector: 'solana-home-bc',
  template: `
    <solana-hero-section-bc></solana-hero-section-bc>
    <solana-features-section-bc></solana-features-section-bc>
  `,
  imports: [HeroSectionComponent, FeatureSectionComponent],
  standalone: true,
})
export class HomePageComponent {}
