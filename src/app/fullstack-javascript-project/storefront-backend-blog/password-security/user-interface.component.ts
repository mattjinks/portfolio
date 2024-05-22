import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'password-security',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    CommonModule
  ],
  templateUrl: './user-interface.component.html',
  styleUrl: './user-interface.component.css'
})
export class PasswordSecurityComponent {
  expanded: boolean = false;

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
