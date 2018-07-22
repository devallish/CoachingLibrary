import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugbyPlayerAssessmentsComponent } from '@cl/rugby/rugby-player-assessments/rugby-player-assessments.component';

describe('RugbyPlayerAssessmentsComponent', () => {
  let component: RugbyPlayerAssessmentsComponent;
  let fixture: ComponentFixture<RugbyPlayerAssessmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugbyPlayerAssessmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugbyPlayerAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
