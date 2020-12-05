import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoNumberComponent } from './duo-number.component';

describe('DuoNumberComponent', () => {
  let component: DuoNumberComponent;
  let fixture: ComponentFixture<DuoNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuoNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
