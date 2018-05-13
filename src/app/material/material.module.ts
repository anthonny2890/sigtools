import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialBaseComponent } from './material-base/material-base.component';
import {
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  } from '@angular/material';
//import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [MaterialBaseComponent]
})
export class MaterialModule { }
