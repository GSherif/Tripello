import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReasonsListComponent } from './hotel-reasons-list.component';

describe('HotelReasonsListComponent', () => {
  let component: HotelReasonsListComponent;
  let fixture: ComponentFixture<HotelReasonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelReasonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReasonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
