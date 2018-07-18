import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevallishComponentsComponent } from './devallish-components.component';

describe('DevallishComponentsComponent', () => {
  let component: DevallishComponentsComponent;
  let fixture: ComponentFixture<DevallishComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevallishComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevallishComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
