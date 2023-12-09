import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable, Subject} from "rxjs";
import {System} from "../../objects/system";
import {InlineEditableTextComponent} from "../inline-editable-text/inline-editable-text.component";
import {InlineEditableNumberComponent} from "../inline-editable-number/inline-editable-number.component";
import {InlineEditableBooleanComponent} from "../inline-editable-boolean/inline-editable-boolean.component";

@Component({
  selector: 'app-systems-row',
  standalone: true,
  imports: [CommonModule, InlineEditableTextComponent, InlineEditableNumberComponent, InlineEditableBooleanComponent],
  templateUrl: './systems-row.component.html',
  styleUrl: './systems-row.component.scss'
})
export class SystemsRowComponent {
  private rowInEditMode: boolean = false;
  private subject = new Subject<any>();
  // @ts-ignore
  @Input() system: System;

  toggleInEditMode(): void {
    this.rowInEditMode = !this.rowInEditMode;
    this.subject.next(this.rowInEditMode);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
