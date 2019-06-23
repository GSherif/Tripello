import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCardListingComponent } from './preview-card-listing.component';

describe('PreviewCardListingComponent', () => {
  let component: PreviewCardListingComponent;
  let fixture: ComponentFixture<PreviewCardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
