import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { PipesModule } from '../pipes/pipes.module';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavItemComponent,
    ProjectCardComponent,
    LanguageSelectorComponent
  ],
  exports: [
    HeaderComponent,
    ProjectCardComponent,
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class UiModule { }
