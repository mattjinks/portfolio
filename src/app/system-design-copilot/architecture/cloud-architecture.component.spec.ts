import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudArchitectureComponent } from './cloud-architecture.component';

describe('CloudArchitectureComponent', () => {
  let component: CloudArchitectureComponent;
  let fixture: ComponentFixture<CloudArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudArchitectureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
