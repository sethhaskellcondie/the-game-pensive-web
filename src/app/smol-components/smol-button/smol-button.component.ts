import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smol-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      <button [ngStyle]="{ 'background-color': color}"
      (click)="onClick()"
      >
        {{text}}
      </button>
    </p>
  `,
  styles: ``
})
export class SmolButtonComponent {
  @Input() text: string = "default";
  @Input() color: string = "grey";
  @Output() buttonClick: EventEmitter<any> = new EventEmitter()

  onClick(): void {
    this.buttonClick.emit();
  }
}
