import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSegmentComponent } from './simple-segment.component';

describe('SimpleSegmentComponent', () => {
  let component: SimpleSegmentComponent;
  let fixture: ComponentFixture<SimpleSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
