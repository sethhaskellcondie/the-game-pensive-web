import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box">
      <h6>Header Component</h6>
      <img src="../../../assets/images/game_pensive_icon.png" alt="game_pensive_icon" height="144px">
      <h1>The Game Pensive</h1>
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
    height: 100px;
  }
  `
})
export class HeaderComponent {

}
