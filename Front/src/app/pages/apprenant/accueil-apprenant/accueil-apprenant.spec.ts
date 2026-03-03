import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilApprenant } from './accueil-apprenant';

describe('AccueilApprenant', () => {
  let component: AccueilApprenant;
  let fixture: ComponentFixture<AccueilApprenant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilApprenant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilApprenant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
