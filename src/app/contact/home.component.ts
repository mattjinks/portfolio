import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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
export class ContactComponent {
  constructor(
    private navService: NavigationService
  ) {}

  ngOnInit() {
    this.navService.resetStates();
    this.navService.setContactState(true);
  }
}
