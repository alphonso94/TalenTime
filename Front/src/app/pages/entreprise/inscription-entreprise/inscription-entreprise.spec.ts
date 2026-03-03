import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEntreprise } from './inscription-entreprise';

describe('InscriptionEntreprise', () => {
  let component: InscriptionEntreprise;
  let fixture: ComponentFixture<InscriptionEntreprise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionEntreprise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionEntreprise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
