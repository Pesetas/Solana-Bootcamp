import { Component } from '@angular/core';

@Component({
  selector: 'solana-features-section-bc',
  template: `
    <section class="px-16 py-24 ">
      <ul class="flex justify-center gap-16">
        <li class="text-xl font-bold">Rapido</li>
        <li class="text-xl font-bold">Seguro</li>
        <li class="text-xl font-bold">Eficiente</li>
      </ul>
    </section>
  `,
  standalone: true,
})
export class FeaturesSectionComponent {}
