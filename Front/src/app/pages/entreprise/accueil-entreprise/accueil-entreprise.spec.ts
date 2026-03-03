import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEntreprise } from './accueil-entreprise';

describe('AccueilEntreprise', () => {
  let component: AccueilEntreprise;
  let fixture: ComponentFixture<AccueilEntreprise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilEntreprise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilEntreprise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
