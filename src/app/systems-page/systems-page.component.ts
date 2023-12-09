import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {System} from "../objects/system";
import {SystemService} from "../services/system.service";
import {SystemsRowComponent} from "../components/systems-row/systems-row.component";

@Component({
  selector: 'app-systems-page',
  standalone: true,
  imports: [CommonModule, SystemsRowComponent],
  templateUrl: './systems-page.component.html',
  styleUrl: './systems-page.component.scss'
})
export class SystemsPageComponent {
  systems: System[] = [];

  constructor(private systemService: SystemService) {
  }

  ngOnInit(): void {
    this.systemService.getSystems().subscribe((systems) => this.systems = systems);
  }
}
