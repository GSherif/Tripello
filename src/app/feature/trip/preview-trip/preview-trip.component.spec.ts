import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTripComponent } from './preview-trip.component';

describe('PreviewTripComponent', () => {
  let component: PreviewTripComponent;
  let fixture: ComponentFixture<PreviewTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
