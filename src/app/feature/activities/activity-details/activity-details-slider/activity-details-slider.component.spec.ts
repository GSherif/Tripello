import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailsSliderComponent } from './activity-details-slider.component';

describe('ActivityDetailsSliderComponent', () => {
  let component: ActivityDetailsSliderComponent;
  let fixture: ComponentFixture<ActivityDetailsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDetailsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDetailsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
