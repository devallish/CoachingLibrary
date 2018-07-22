import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContentContainerComponent } from '@cl/shared/ui/section-content-container/section-content-container.component';

describe('SectionContentContainerComponent', () => {
  let component: SectionContentContainerComponent;
  let fixture: ComponentFixture<SectionContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
