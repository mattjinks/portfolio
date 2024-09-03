import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

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
    private router: Router,
    private navService: NavigationService
  ) {}

  showCommentGeneratorProject() {
    console.log("Naivagte Comment Generate Project")
    window.location.href = 'https://medium.com/@mattjinks/code-comment-generator-with-ruby-on-rails-and-openai-0bce18bab911';
  }

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

  ngOnInit() {
    this.navService.resetStates();
    this.navService.setExperienceState(true);
  }
}
