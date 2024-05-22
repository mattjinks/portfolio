import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../cloud-project/cloud-project-blog/section-header/section-header.component';

@Component({
  selector: 'api-endpoints',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    CommonModule
  ],
  templateUrl: './cloud-architecture.component.html',
  styleUrl: './cloud-architecture.component.css'
})
export class ApiEndpointsComponent {
  expanded: boolean;
  constructor() {
    this.expanded = false;
  }
  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
