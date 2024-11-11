import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'demo',
  standalone: true,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  imports: [SectionHeaderComponent, CommonModule],
})
export class DemoComponent {
  expanded: boolean;
  constructor() {
    this.expanded = false;
  }
  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
