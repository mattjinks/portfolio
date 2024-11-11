import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'description',
  standalone: true,
  imports: [SectionHeaderComponent, CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent {
  expanded: boolean;
  constructor() {
    this.expanded = true;
  }
  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }

  keepExpanded(): void {
    this.expanded = true;
  }
}
