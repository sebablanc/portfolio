import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { RS_LINKS } from 'src/app/constants/items';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UiModule } from 'src/app/ui/ui.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, UiModule, ComponentsModule, LayoutsModule, PipesModule]
})
export class HomeComponent {
  headerRSItems: Array<{logo: string, link: string}> = RS_LINKS;
}
