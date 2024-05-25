import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private router: Router,
    private navService: NavigationService
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

  ngOnInit() {
    this.navService.resetStates();
    this.navService.setHomeState(true);
  }
}
