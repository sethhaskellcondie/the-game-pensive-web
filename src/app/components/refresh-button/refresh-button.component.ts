import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-refresh-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      <button>Refresh</button>
    </p>
  `,
  styles: `
    button {
      background-color: plum;
    }
  `
})
export class RefreshButtonComponent {

}
