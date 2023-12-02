import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inline-editable-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div (dblclick)="doubleClick()">
      <p *ngIf="!editingState">{{text}}</p>
      <input *ngIf="editingState" #box (keydown.enter)="enterPressed(box.value)"/>
    </div>
  `,
  styles: ``
})
export class InlineEditableTextComponent {
  //TODO figure out what this ignore is asking for

  // @ts-ignore
  @Input() text: string;
  // @ts-ignore
  @Input() validation: (validateText: string) => boolean;
  editingState: boolean = false;

  doubleClick() {
    if (this.editingState) {
      return;
    }
    this.editingState = true;
  }

  enterPressed(value: string) {
    this.text = value;
    this.editingState = !this.editingState;
    //run validation on the value?
    if (this.validation(value)) {
      return value;
    }
    //TODO update this return to be an error
    return "";
  }
}
