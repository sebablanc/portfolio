import { Component, EventEmitter, OnInit, Output } from '@angular/core';

const LANGUAGES_ITEMS = [
  {label: 'Esp', option: 'es-AR'},
  {label: 'Eng', option: 'en'}
]

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  @Output('language') sendLanguage: EventEmitter<string> = new EventEmitter();
  languageOptions = LANGUAGES_ITEMS;
  languageSelected = LANGUAGES_ITEMS[0].option;

  ngOnInit(){
    this.languageSelected = localStorage.getItem('langSelected') || LANGUAGES_ITEMS[0].option;
  }

  emitLanguage(lang: string){
    this.languageSelected = lang;
    this.sendLanguage.emit(lang);
  }
}
