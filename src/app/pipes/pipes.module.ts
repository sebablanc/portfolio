import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiesParserPipe } from './tecnologies-parser/tecnologies-parser.pipe';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TecnologiesParserPipe
  ],
  exports: [
    TecnologiesParserPipe,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class PipesModule { }
