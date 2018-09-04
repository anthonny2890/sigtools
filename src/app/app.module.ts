import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { NasaApiService } from './shared/services/nasa-api.service';
import { LowerCasePipe } from './shared/pipes/lower-case.pipe';
import { SettingApiService } from './shared/services/setting-api.service';



import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es-PE';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './shared/services/my-http-interceptor';
import { MarsModule } from './mars/mars.module';

import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth/auth.guard';

import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';

registerLocaleData(localeES, getLanguage);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LowerCasePipe,
    jqxNotificationComponent
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
  providers: [
    AppComponent,
    NasaApiService,
    AuthGuard,  
    {
        provide: HTTP_INTERCEPTORS,
        useClass: MyHttpInterceptor, 
        multi: true
    },
    {
      provide: LOCALE_ID , 
      deps : [SettingApiService], 
      useFactory: getLanguage
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

export function getLanguage(SettingApiService:SettingApiService) {
  return SettingApiService.getLanguage();
}