import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmingSessionPlanComponent } from '@cl/swimming/swimming-session-plan/swimming-session-plan.component';

describe('SwimmingSessionPlanComponent', () => {
  let component: SwimmingSessionPlanComponent;
  let fixture: ComponentFixture<SwimmingSessionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmingSessionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmingSessionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
