import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SaveButtonComponent} from "./components/save-button/save-button.component";
import {RefreshButtonComponent} from "./components/refresh-button/refresh-button.component";
import {NewButtonComponent} from "./components/new-button/new-button.component";
import {DeleteButtonComponent} from "./components/delete-button/delete-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavBarComponent, FooterComponent, SaveButtonComponent, RefreshButtonComponent, NewButtonComponent, DeleteButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'the-game-pensive-web';
}
