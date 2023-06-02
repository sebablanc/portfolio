import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/models/project.type';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Output('clicked') cardClicked: EventEmitter<boolean> = new EventEmitter();
  @Input() project: Project | undefined;
}
