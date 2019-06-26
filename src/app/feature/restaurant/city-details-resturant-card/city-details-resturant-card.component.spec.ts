import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsResturantCardComponent } from './city-details-resturant-card.component';

describe('CityDetailsResturantCardComponent', () => {
  let component: CityDetailsResturantCardComponent;
  let fixture: ComponentFixture<CityDetailsResturantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailsResturantCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsResturantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
