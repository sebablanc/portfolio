import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontCircleSpinComponent } from './front-circle-spin/front-circle-spin.component';
import { BackCircleSpinComponent } from './back-circle-spin/back-circle-spin.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { UiModule } from '../ui/ui.module';
import { ProjectPresentationSectionComponent } from './project-presentation-section/project-presentation-section.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    FrontCircleSpinComponent,
    BackCircleSpinComponent,
    ProjectsSectionComponent,
    ProjectPresentationSectionComponent
  ],
  exports: [
    FrontCircleSpinComponent,
    BackCircleSpinComponent,
    ProjectsSectionComponent,
    ProjectPresentationSectionComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    PipesModule
  ]
})
export class ComponentsModule { }
