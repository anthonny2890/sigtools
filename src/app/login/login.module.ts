import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule    
  ],
  declarations: [jqxNotificationComponent, LoginComponent]
})
export class LoginModule { }
