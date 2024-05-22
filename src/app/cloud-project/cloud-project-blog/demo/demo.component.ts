import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../../../cloud-project/cloud-project-blog/section-header/section-header.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'demo',
    standalone: true,
    templateUrl: './demo.component.html',
    styleUrl: './demo.component.css',
    imports: [
      SectionHeaderComponent,
      CommonModule
    ]
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
