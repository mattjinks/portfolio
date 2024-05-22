import { Component } from '@angular/core';
import { DescriptionComponent } from "./description/description.component";
import { DemoComponent } from "./demo/demo.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";
import { UserInterfaceComponent } from "./user-interface/user-interface.component";
import { CloudArchitectureComponent } from "./cloud-architecture/cloud-architecture.component";
import { FrontEndDesignComponent } from "./front-end-design/front-end-design.component";
import { DeploymentComponent } from "./deployment/deployment.component";

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

}
