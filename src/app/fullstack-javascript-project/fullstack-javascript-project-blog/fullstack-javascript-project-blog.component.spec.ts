import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackJavascriptProjectBlogComponent } from './fullstack-javascript-project-blog.component';

describe('FullstackJavascriptProjectBlogComponent', () => {
  let component: FullstackJavascriptProjectBlogComponent;
  let fixture: ComponentFixture<FullstackJavascriptProjectBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullstackJavascriptProjectBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullstackJavascriptProjectBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
