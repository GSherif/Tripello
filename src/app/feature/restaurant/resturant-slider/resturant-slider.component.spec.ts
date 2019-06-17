import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantSliderComponent } from './resturant-slider.component';

describe('ResturantSliderComponent', () => {
  let component: ResturantSliderComponent;
  let fixture: ComponentFixture<ResturantSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
