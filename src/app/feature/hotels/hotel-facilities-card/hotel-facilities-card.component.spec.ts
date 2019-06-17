import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFacilitiesCardComponent } from './hotel-facilities-card.component';

describe('HotelFacilitiesCardComponent', () => {
  let component: HotelFacilitiesCardComponent;
  let fixture: ComponentFixture<HotelFacilitiesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFacilitiesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFacilitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
