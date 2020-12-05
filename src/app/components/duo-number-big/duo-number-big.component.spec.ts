import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoNumberBigComponent } from './duo-number-big.component';

describe('DuoNumberBigComponent', () => {
  let component: DuoNumberBigComponent;
  let fixture: ComponentFixture<DuoNumberBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuoNumberBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoNumberBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
