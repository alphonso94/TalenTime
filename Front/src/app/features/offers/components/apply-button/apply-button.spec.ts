import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyButton } from './apply-button';

describe('ApplyButton', () => {
  let component: ApplyButton;
  let fixture: ComponentFixture<ApplyButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
