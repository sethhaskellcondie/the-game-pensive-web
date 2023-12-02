import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box">
      <h6>Work In Progress</h6>
    </div>
  `,
  styles: `
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-style: solid;
    border-width: 4px;
    border-color: black;
    height: 50px;
  }
  h6 {
    margin: 10px;
  }
  `
})
export class FooterComponent {

}
