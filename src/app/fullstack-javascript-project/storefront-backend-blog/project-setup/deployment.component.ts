import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../cloud-project/cloud-project-blog/section-header/section-header.component';

@Component({
  selector: 'deployment',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    CommonModule
  ],
  templateUrl: './deployment.component.html',
  styleUrl: './deployment.component.css'
})
export class DeploymentComponent {
  expanded: boolean = false;

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
