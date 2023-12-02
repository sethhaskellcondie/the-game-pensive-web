import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box">
      <h3>Systems</h3>
      <h3>Settings</h3>
    </div>
  `,
  styles: `
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-style: solid;
    border-bottom-style: solid;
    border-width: 4px;
    border-color: black;
    height: 50px;
  }
  h3 {
    margin: 10px;
  }
  `
})
export class NavBarComponent {

}
