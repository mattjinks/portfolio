import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'section-header',
  standalone: true,
  imports: [
    MatTreeModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css'
})
export class SectionHeaderComponent {
  @Input() title: string;
  @Input() expanded: boolean;
  isVisible: boolean = true; // Initially visible, set to false if you want it hidden initially

  constructor() {
    this.title = 'Header';
    this.expanded = false;
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
