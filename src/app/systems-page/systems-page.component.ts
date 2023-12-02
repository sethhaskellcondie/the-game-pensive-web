import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {System} from "../objects/system";
import {SYSTEMS} from "../objects/mock-systems";
import {SystemsRowComponent} from "../components/systems-row/systems-row.component";

@Component({
  selector: 'app-systems-page',
  standalone: true,
  imports: [CommonModule, SystemsRowComponent],
  templateUrl: './systems-page.component.html',
  styleUrl: './systems-page.component.scss'
})
export class SystemsPageComponent {
  systems: System[] = SYSTEMS;
}
