import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTags } from './skill-tags';

describe('SkillTags', () => {
  let component: SkillTags;
  let fixture: ComponentFixture<SkillTags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillTags]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillTags);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
