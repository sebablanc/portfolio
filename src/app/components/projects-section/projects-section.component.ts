import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.type';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit{
  projects: Array<Project> = [];

  constructor(private router: Router, private projectsSrv: ProjectsService){}

  ngOnInit(): void {
    this.projects = this.projectsSrv.projects;
  }

  navToProjectDetail(id: number){
    if(id<1) return;
    this.router.navigate([`projects/${id}`]);
  }
}
