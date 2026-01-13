import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infoentreprise } from './infoentreprise';

describe('Infoentreprise', () => {
  let component: Infoentreprise;
  let fixture: ComponentFixture<Infoentreprise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infoentreprise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infoentreprise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
