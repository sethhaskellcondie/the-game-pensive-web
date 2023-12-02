import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      <button>New</button>
    </p>
  `,
  styles: `
    button {
      background-color: lightblue;
    }
  `
})
export class NewButtonComponent {

}
