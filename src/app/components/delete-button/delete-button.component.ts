import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      <button>Delete</button>
    </p>
  `,
  styles: `
    button {
      background-color: indianred;
    }
  `
})
export class DeleteButtonComponent {

}
