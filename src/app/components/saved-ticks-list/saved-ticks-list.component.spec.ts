import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTicksListComponent } from './saved-ticks-list.component';

describe('SavedTicksListComponent', () => {
  let component: SavedTicksListComponent;
  let fixture: ComponentFixture<SavedTicksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedTicksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedTicksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
