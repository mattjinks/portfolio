import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../cloud-project/cloud-project-blog/section-header/section-header.component';

@Component({
  selector: 'cloud-architecture',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    CommonModule
  ],
  templateUrl: './cloud-architecture.component.html',
  styleUrl: './cloud-architecture.component.css'
})
export class CloudArchitectureComponent {
  expanded: boolean;
  constructor() {
    this.expanded = false;
  }
  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
