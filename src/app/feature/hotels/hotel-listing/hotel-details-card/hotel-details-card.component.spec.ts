import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsCardComponent } from './hotel-details-card.component';

describe('HotelDetailsCardComponent', () => {
  let component: HotelDetailsCardComponent;
  let fixture: ComponentFixture<HotelDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
