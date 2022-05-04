import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningHoursModalComponent } from './opening-hours-modal.component';

describe('OpeningHoursModalComponent', () => {
  let component: OpeningHoursModalComponent;
  let fixture: ComponentFixture<OpeningHoursModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningHoursModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningHoursModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
