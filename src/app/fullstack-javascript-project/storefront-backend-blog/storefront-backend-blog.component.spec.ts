import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontBackendBlogComponent } from './storefront-backend-blog.component';

describe('StorefrontBackendBlogComponent', () => {
  let component: StorefrontBackendBlogComponent;
  let fixture: ComponentFixture<StorefrontBackendBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorefrontBackendBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorefrontBackendBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
