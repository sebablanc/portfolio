import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPresentationSectionComponent } from './project-presentation-section.component';

describe('ProjectPresentationSectionComponent', () => {
  let component: ProjectPresentationSectionComponent;
  let fixture: ComponentFixture<ProjectPresentationSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPresentationSectionComponent]
    });
    fixture = TestBed.createComponent(ProjectPresentationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
