import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  template: `
    <div class="page">
      <h2>Store</h2>
      <p>Coming soon: Pupocalypse gear and goodies.</p>
    </div>
  `,
  styles: [`
    .page { max-width: 800px; margin: 0 auto; padding: 24px; color: #2B4C7E; }
    h2 { color: #3A6EA5; }
  `]
})
export class StoreComponent {}


