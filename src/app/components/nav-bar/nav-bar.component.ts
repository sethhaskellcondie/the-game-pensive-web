import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box">
      <h6>Nav-Bar Component</h6>
      <h3>Systems</h3>
      <h3>Settings</h3>
      <h6>These should be links after the pages are made</h6>
    </div>
  `,
  styles: `
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 4px;
    border-color: black;
    height: 50px;
  }
  h6, h3 {
    margin: 10px;
  }
  `
})
export class NavBarComponent {

}
