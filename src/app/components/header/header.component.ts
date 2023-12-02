import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box">
      <img src="../../../assets/images/game_pensive_icon.png" alt="game_pensive_icon" height="144px">
      <h1>The Game Pensive</h1>
    </div>
  `,
  styles: `
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  `
})
export class HeaderComponent {

}
