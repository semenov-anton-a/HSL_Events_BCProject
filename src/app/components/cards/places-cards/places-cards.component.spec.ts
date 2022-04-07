import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesCardsComponent } from './places-cards.component';

describe('PlacesCardsComponent', () => {
  let component: PlacesCardsComponent;
  let fixture: ComponentFixture<PlacesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
