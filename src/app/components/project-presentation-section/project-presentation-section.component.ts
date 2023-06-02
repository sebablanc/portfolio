import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.type';

@Component({
  selector: 'app-project-presentation-section',
  templateUrl: './project-presentation-section.component.html',
  styleUrls: ['./project-presentation-section.component.scss']
})
export class ProjectPresentationSectionComponent {
  @Input() project: Project | undefined;
}
