import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inline-editable-number',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div (dblclick)="doubleClick()">
      <p *ngIf="!editingState">{{value}}</p>
      <input *ngIf="editingState" type="number" #box (keydown.enter)="enterPressed(Number(box.value))"/>
    </div>
  `,
  styles: ``
})
export class InlineEditableNumberComponent {
  //TODO figure out what this ignore is asking for

  // @ts-ignore
  @Input() value: number;
  editingState: boolean = false;

  doubleClick() {
    if (this.editingState) {
      return;
    }
    this.editingState = true;
  }

  enterPressed(newValue: number) {
    this.value = newValue;
    this.editingState = !this.editingState;
    return newValue;
  }

  protected readonly Number = Number;
}
