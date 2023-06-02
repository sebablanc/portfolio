import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UiModule } from '../ui/ui.module';
import { SectionLayoutComponent } from './section-layout/section-layout.component';
import { ModalLayoutComponent } from './modal-layout/modal-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    SectionLayoutComponent,
    ModalLayoutComponent
  ],
  exports:[
    MainLayoutComponent,
    SectionLayoutComponent,
    ModalLayoutComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class LayoutsModule { }
