import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthModalComponent } from './month-modal.component';

describe('MonthModalComponent', () => {
  let component: MonthModalComponent;
  let fixture: ComponentFixture<MonthModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
