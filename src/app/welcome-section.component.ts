import { Component } from '@angular/core';

@Component({
  selector: 'solana-welcome-section-bc',
  template: `
    <section class="px-16 py-24 bg-white bg-opacity-5">
      <h2 class="text-center text-3xl">Inicio</h2>
      <p class="text-center">¡Bienvenido a mi cartera!</p>
    </section>
  `,
  standalone: true,
})
export class WelcomeSectionComponent {}
