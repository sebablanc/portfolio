import { Injectable } from '@angular/core';
import projectsJSON from '../../../assets/projects.json';
import { Project } from 'src/app/models/project.type';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Array<Project> = [];

  constructor() {
    this.projects = projectsJSON;
  }


  getProjectById(id: number){
    return this.projects.find((project) => project.id === id);
  }
}
