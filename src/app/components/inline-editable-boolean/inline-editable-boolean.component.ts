import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inline-editable-boolean',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div (dblclick)="doubleClick()">
      <p *ngIf="!editingState">{{value}}</p>
      <input *ngIf="editingState" type="checkbox" #box (keydown.enter)="enterPressed(Boolean(box.value))"/>
    </div>
  `,
  styles: ``
})
export class InlineEditableBooleanComponent {
  //TODO figure out what this ignore is asking for

  // @ts-ignore
  @Input() value: boolean;
  editingState: boolean = false;

  doubleClick() {
    if (this.editingState) {
      return;
    }
    this.editingState = true;
  }

  enterPressed(newValue: boolean) {
    this.value = newValue;
    this.editingState = !this.editingState;
    return newValue;
  }

  protected readonly Boolean = Boolean;
}
