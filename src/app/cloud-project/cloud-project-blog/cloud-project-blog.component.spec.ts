import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudProjectBlogComponent } from './cloud-project-blog.component';

describe('CloudProjectBlogComponent', () => {
  let component: CloudProjectBlogComponent;
  let fixture: ComponentFixture<CloudProjectBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudProjectBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudProjectBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
