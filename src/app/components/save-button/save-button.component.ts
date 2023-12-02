import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button>Save</button>
  `,
  styles: `
    button {
      background-color: lightgreen;
    }
  `
})
export class SaveButtonComponent {

}
