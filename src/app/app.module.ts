import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { NasaApiService } from './shared/services/nasa-api.service';
import { LowerCasePipe } from './shared/pipes/lower-case.pipe';
import { SettingApiService } from './shared/services/setting-api.service';



import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es-PE';
import { HttpClientModule } from '@angular/common/http';
import { MarsModule } from './mars/mars.module';
import { LoginModule } from './login/login.module';


registerLocaleData(localeES, getLanguage);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LowerCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MarsModule,
    LoginModule    
  ],
  providers: [NasaApiService, {
    provide: LOCALE_ID, 
    deps : [SettingApiService], 
    useFactory: getLanguage
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

export function getLanguage(SettingApiService:SettingApiService) {
  return SettingApiService.getLanguage();
}