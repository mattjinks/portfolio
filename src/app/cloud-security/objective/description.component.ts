import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'objective',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    CommonModule
  ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class ObjectiveComponent {
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
