import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class ResumeComponent {

  constructor(
    private router: Router
  ) {}

  showSecurityProject() {
    this.router.navigate(['/cloud-security-project']);
  }

  showCloudProject() {
    this.router.navigate(['/cloud-project']);
  }

  showResume() {
    this.router.navigate(['/resume']);
  }
}
