import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsActivityCardComponent } from './city-details-activity-card.component';

describe('CityDetailsActivityCardComponent', () => {
  let component: CityDetailsActivityCardComponent;
  let fixture: ComponentFixture<CityDetailsActivityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailsActivityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
