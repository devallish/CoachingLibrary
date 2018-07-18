import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmingSessionPlansComponent } from './swimming-session-plans.component';

describe('SwimmingSessionPlansComponent', () => {
  let component: SwimmingSessionPlansComponent;
  let fixture: ComponentFixture<SwimmingSessionPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmingSessionPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmingSessionPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
