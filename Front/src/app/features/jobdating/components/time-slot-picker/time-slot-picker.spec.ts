import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotPicker } from './time-slot-picker';

describe('TimeSlotPicker', () => {
  let component: TimeSlotPicker;
  let fixture: ComponentFixture<TimeSlotPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSlotPicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeSlotPicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
