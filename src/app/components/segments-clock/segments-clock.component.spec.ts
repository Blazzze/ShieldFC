import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsClockComponent } from './segments-clock.component';

describe('SegmentsClockComponent', () => {
  let component: SegmentsClockComponent;
  let fixture: ComponentFixture<SegmentsClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentsClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
