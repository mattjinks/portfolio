import { RouterModule, Routes } from '@angular/router';
import { CloudProjectBlogComponent } from './cloud-project/cloud-project-blog/cloud-project-blog.component';
import { StorefrontBackendBlogComponent } from './fullstack-javascript-project/storefront-backend-blog/storefront-backend-blog.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/home.component';
import { CloudSecurityComponent } from './cloud-security/storefront-backend-blog.component';
import { PrivacyComponent } from './cloud-security copy/storefront-backend-blog.component';
import { ContactComponent } from './contact/home.component';
import { ResumeComponent } from './resume/home.component';
import { SystemDesignComponent } from './system-design-copilot/cloud-project-blog.component';

const routes: Routes = [
  { path: 'cloud-project', component: CloudProjectBlogComponent },
  {
    path: 'storefront-backend-project',
    component: StorefrontBackendBlogComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'projects', component: ExperienceComponent },
  { path: 'cloud-security-project', component: CloudSecurityComponent },
  { path: 'privacy-project', component: PrivacyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'system-design-copilot', component: SystemDesignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
