import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCityFilterComponent } from './form-city-filter.component';

describe('FormCityFilterComponent', () => {
  let component: FormCityFilterComponent;
  let fixture: ComponentFixture<FormCityFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCityFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
