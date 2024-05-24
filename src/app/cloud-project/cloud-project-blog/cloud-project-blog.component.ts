import { Component } from '@angular/core';
import { DescriptionComponent } from "./description/description.component";
import { DemoComponent } from "./demo/demo.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";
import { UserInterfaceComponent } from "./user-interface/user-interface.component";
import { CloudArchitectureComponent } from "./cloud-architecture/cloud-architecture.component";
import { FrontEndDesignComponent } from "./front-end-design/front-end-design.component";
import { DeploymentComponent } from "./deployment/deployment.component";
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../../navigation.service';

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
        DeploymentComponent
    ]
})
export class CloudProjectBlogComponent {

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
