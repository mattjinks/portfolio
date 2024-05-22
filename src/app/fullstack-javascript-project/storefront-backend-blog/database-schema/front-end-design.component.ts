import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../section-header/section-header.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'db-schema',
    standalone: true,
    templateUrl: './front-end-design.component.html',
    styleUrl: './front-end-design.component.css',
    imports: [
      SectionHeaderComponent,
      CommonModule
    ]
})
export class DataBaseSchemaComponent {
  expanded: boolean = false;

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
