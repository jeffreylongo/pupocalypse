import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="page">
      <h2>About Pupocalypse</h2>
      <p>Pupocalypse creates playful, quality products inspired by our love of dogs.</p>
    </div>
  `,
  styles: [`
    .page { max-width: 800px; margin: 0 auto; padding: 24px; color: #2B4C7E; }
    h2 { color: #3A6EA5; }
  `]
})
export class AboutComponent {}


