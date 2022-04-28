import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLoaddataComponent } from './btn-loaddata.component';

describe('BtnLoaddataComponent', () => {
  let component: BtnLoaddataComponent;
  let fixture: ComponentFixture<BtnLoaddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnLoaddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLoaddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
