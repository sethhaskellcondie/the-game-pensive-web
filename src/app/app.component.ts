import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SettingsPageComponent } from "./settings-page/settings-page.component";
import { SystemsPageComponent } from "./systems-page/systems-page.component";
import { InlineEditableTextComponent } from "./smol-components/inline-editable-text/inline-editable-text.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [
      CommonModule,
      RouterOutlet,
      HeaderComponent,
      NavBarComponent,
      FooterComponent,
      SettingsPageComponent,
      SystemsPageComponent,
      InlineEditableTextComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'the-game-pensive-web';
}
