import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialBaseComponent } from './material-base/material-base.component';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule
  ],
  declarations: [MaterialBaseComponent]
})
export class MaterialModule { }
