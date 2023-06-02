import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ComponentsModule } from 'src/app/components/components.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { MODAL_SIZE } from 'src/app/layouts/modal-layout/modal-layout.component';
import { Project } from 'src/app/models/project.type';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { UiModule } from 'src/app/ui/ui.module';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, UiModule, ComponentsModule, LayoutsModule, SlickCarouselModule]
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  modalImg: string | undefined;

  modalSize = MODAL_SIZE;

  slideConfig = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor(private route: ActivatedRoute, private projectsSrv: ProjectsService){}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = Number(routeParams.get('idProject'));
    this.project = this.projectsSrv.getProjectById(projectIdFromRoute);
    this.openImg(this.project?.projectImages[0] || '');
  }

  openImg(pic: string){
    if(this.project && pic) this.modalImg = `assets/img/${this.project.imagesFolder}/${ pic }`;
    
  }
}
