import { Component } from '@angular/core';
import { DescriptionComponent } from './description/description.component';
import { DemoComponent } from './demo/demo.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { FrontEndDesignComponent } from '../cloud-project/cloud-project-blog/front-end-design/front-end-design.component';
import { UserInterfaceComponent } from '../cloud-project/cloud-project-blog/user-interface/user-interface.component';
import { CloudArchitectureComponent } from './architecture/cloud-architecture.component';

@Component({
  selector: 'app-cloud-project-blog',
  standalone: true,
  templateUrl: './cloud-project-blog.component.html',
  styleUrl: './cloud-project-blog.component.css',
  imports: [
    DescriptionComponent,
    DemoComponent,
    SectionHeaderComponent,
    UserInterfaceComponent,
    CloudArchitectureComponent,
    FrontEndDesignComponent,
    DeploymentComponent,
  ],
})
export class SystemDesignComponent {
  constructor(
    private route: ActivatedRoute,
    private navService: NavigationService,
    private router: Router
  ) {
    const currentRoute = this.route.snapshot.url.join('/'); // Join URL segments
    console.log(currentRoute);
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
