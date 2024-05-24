import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon';
import { SectionHeaderComponent } from '../../cloud-project/cloud-project-blog/section-header/section-header.component';
import { DescriptionComponent } from './description/description.component';
import { DemoComponent } from "./demo/demo.component";
import { DataBaseSchemaComponent } from "./database-schema/front-end-design.component";
import { ApiEndpointsComponent } from "./api-endpoints/cloud-architecture.component";
import { PasswordSecurityComponent } from "./password-security/user-interface.component";
import { JwtComponent } from './web-tokens/deployment.component';
import { UnitTestsComponent } from './unit-tests/deployment.component';
import { NavigationService } from '../../navigation.service';
import { Router } from '@angular/router';

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
        DemoComponent,
        DataBaseSchemaComponent,
        ApiEndpointsComponent,
        PasswordSecurityComponent,
        JwtComponent,
        UnitTestsComponent
    ]
})
export class StorefrontBackendBlogComponent {
  isVisible: boolean = true; // Initially visible, set to false if you want it hidden initially
  expanded: boolean = false;

  constructor(
    private navService: NavigationService,
    private router: Router
  ) {}

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }

  ngOnInit() {
    this.navService.resetStates();
    this.navService.setExperienceState(true);
  }

  showExperience() {
    this.navService.resetStates();
    this.navService.setExperienceState(true);
    this.router.navigate(['/experience']);
  }

}
