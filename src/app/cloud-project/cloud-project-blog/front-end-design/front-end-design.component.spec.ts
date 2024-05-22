import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndDesignComponent } from './front-end-design.component';

describe('FrontEndDesignComponent', () => {
  let component: FrontEndDesignComponent;
  let fixture: ComponentFixture<FrontEndDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontEndDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontEndDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
