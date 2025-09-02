import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="page">
      <h2>Contact</h2>
      <p>Email us at <a href="mailto:pupocalypseinc@gmail.com">pupocalypseinc@gmail.com</a>.</p>
    </div>
  `,
  styles: [`
    .page { max-width: 800px; margin: 0 auto; padding: 24px; color: #2B4C7E; }
    h2 { color: #3A6EA5; }
    a { color: #F2C14E; }
  `]
})
export class ContactComponent {}


