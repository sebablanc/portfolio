import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const NAV_ITEMS = [
  {title: 'common.home', url: '', value: {value: ''}},
  {title: 'common.aboutMe', url: 'aboutMeSection', value: {value: ''}},
  {title: 'Tech Skills', url: 'techSkillsSection', value: {value: ''}},
  {title: 'common.projects', url: 'proyectosSection', value: {value: ''}},
  {title: 'common.contact', url: 'contactoSection', value: {value: ''}}
]
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems = NAV_ITEMS;
  constructor(private translateSrv: TranslateService){}

  ngOnInit(){
    this.changeLanguage(localStorage.getItem('langSelected') || 'es-AR');
  }

  changeLanguage(language: string){
    localStorage.setItem('langSelected', language);
    this.translateSrv.setDefaultLang(language);
    this.translateSrv.use(language);
  }
}
