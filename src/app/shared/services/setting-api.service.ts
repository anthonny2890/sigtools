import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingApiService {

  currentLang: string;

  constructor() {
    this.currentLang = 'es-PE';
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
  }
  getLanguage() {
    return this.currentLang;
  }

}
