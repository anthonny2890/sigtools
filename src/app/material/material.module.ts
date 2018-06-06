import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialBaseComponent } from './material-base/material-base.component';
import { FormsModule } from '@angular/forms';

import {
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,    
  } from '@angular/material';

import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { ItemEmpleadoComponent } from './material-list/item-empleado/item-empleado.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule
    
  ],
  declarations: [MaterialBaseComponent, MaterialButtonComponent, MaterialInputComponent, MaterialListComponent, ItemEmpleadoComponent]
})
export class MaterialModule { }
