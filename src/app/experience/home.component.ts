import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    FlexLayoutModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class ExperienceComponent {

  constructor(
    private router: Router
  ) {}

  showCloudProject() {
    console.log("Naivagte Cloud Project")
    this.router.navigate(['/cloud-project']);
  }

  showBackendProject() {
    this.router.navigate(['/storefront-backend-project']);
  }

  showCloudSecurityProject() {
    this.router.navigate(['/cloud-security-project']);
  }

  showPrivacyProject() {
    this.router.navigate(['/privacy-project']);
  }
}
