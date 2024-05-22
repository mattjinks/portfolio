import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { FullstackJavascriptProjectBlogComponent } from "./fullstack-javascript-project/fullstack-javascript-project-blog/fullstack-javascript-project-blog.component";
import { StorefrontBackendBlogComponent } from "./fullstack-javascript-project/storefront-backend-blog/storefront-backend-blog.component";
import { BrowserModule } from '@angular/platform-browser';
import { SectionHeaderComponent } from "./cloud-project/cloud-project-blog/section-header/section-header.component";
import { FrontEndDesignComponent } from "./cloud-project/cloud-project-blog/front-end-design/front-end-design.component";
import { CloudArchitectureComponent } from "./cloud-project/cloud-project-blog/cloud-architecture/cloud-architecture.component";
import { DemoComponent } from "./cloud-project/cloud-project-blog/demo/demo.component";
import { DeploymentComponent } from "./cloud-project/cloud-project-blog/deployment/deployment.component";
import { DescriptionComponent } from "./cloud-project/cloud-project-blog/description/description.component";
import { UserInterfaceComponent } from "./cloud-project/cloud-project-blog/user-interface/user-interface.component";
import { DataBaseSchemaComponent } from "./fullstack-javascript-project/storefront-backend-blog/database-schema/front-end-design.component";
import { ApiEndpointsComponent } from "./fullstack-javascript-project/storefront-backend-blog/api-endpoints/cloud-architecture.component";
import { PasswordSecurityComponent } from "./fullstack-javascript-project/storefront-backend-blog/password-security/user-interface.component";
import { JwtComponent } from "./fullstack-javascript-project/storefront-backend-blog/web-tokens/deployment.component";
import { UnitTestsComponent } from "./fullstack-javascript-project/storefront-backend-blog/unit-tests/deployment.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { ExperienceComponent } from "./experience/home.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CloudSecurityComponent } from "./cloud-security/storefront-backend-blog.component";
import { AppRoutingModule } from './app-routing.module';
import { PrivacyComponent } from "./cloud-security copy/storefront-backend-blog.component";
import { ContactComponent } from "./contact/home.component";
import { ResumeComponent } from "./resume/home.component";

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    AppRoutingModule,
    StorefrontBackendBlogComponent,
    FullstackJavascriptProjectBlogComponent,
    BrowserModule,
    SectionHeaderComponent,
    DescriptionComponent,
    DemoComponent,
    FrontEndDesignComponent,
    CloudArchitectureComponent,
    DeploymentComponent,
    UserInterfaceComponent,
    DataBaseSchemaComponent,
    ApiEndpointsComponent,
    PasswordSecurityComponent,
    JwtComponent,
    UnitTestsComponent,
    NavBarComponent,
    HomeComponent,
    ExperienceComponent,
    FlexLayoutModule,
    CloudSecurityComponent,
    PrivacyComponent,
    ContactComponent,
    ResumeComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule {}
