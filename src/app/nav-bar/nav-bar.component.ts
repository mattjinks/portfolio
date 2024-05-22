import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  home: Boolean;
  experience: Boolean;
  resume: Boolean;
  contact: Boolean;
  private subscriptionSource: Subscription | null = null;

  constructor(
    private router: Router,
    private navService: NavigationService
  ) {
    this.home = true;
    this.experience = false;
    this.resume = false;
    this.contact = false;
  }

  ngOnInit() {
    this.subscriptionSource = this.navService.getHomeState().subscribe(currentHomeState => {
      this.home = currentHomeState;
    })

    this.subscriptionSource = this.navService.getExperienceState().subscribe(experienceState => {
      this.experience = experienceState;
    })

    this.subscriptionSource = this.navService.getContactState().subscribe(contactState => {
      this.contact = contactState;
    })

    this.subscriptionSource = this.navService.getResumeState().subscribe(resumeState => {
      this.resume = resumeState;
    })
  }

  showHomePage() {
    this.navService.resetStates();
    this.navService.setHomeState(true);
    this.router.navigate(['/home']);
  }

  showExperience() {
    this.navService.resetStates();
    this.navService.setExperienceState(true);
    this.router.navigate(['/experience']);
  }

  showResume() {
    this.navService.resetStates();
    this.navService.setResumeState(true);
    this.router.navigate(['/resume']);
  }

  showContactPage() {
    this.navService.resetStates();
    this.navService.setContactState(true);
    this.router.navigate(['/contact']);
  }
}
