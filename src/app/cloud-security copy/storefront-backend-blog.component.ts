import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon';
import { DescriptionComponent } from './description/description.component';
import { PartOneComponent } from "./partOne/description.component";
import { SectionHeaderComponent } from './section-header/section-header.component';

@Component({
    selector: 'app-storefront-backend-blog',
    standalone: true,
    templateUrl: './storefront-backend-blog.component.html',
    styleUrl: './storefront-backend-blog.component.css',
    imports: [
        MatTreeModule,
        CommonModule,
        MatIconModule,
        SectionHeaderComponent,
        DescriptionComponent,
        PartOneComponent,
        PartOneComponent
    ]
})
export class PrivacyComponent {
  isVisible: boolean = true; // Initially visible, set to false if you want it hidden initially
  expanded: boolean = false;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
