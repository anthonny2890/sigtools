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
    MatSelectModule,    
  } from '@angular/material';

import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { ItemEmpleadoComponent } from './material-list/item-empleado/item-empleado.component';
import {MatMenuModule} from '@angular/material/menu';

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
    FormsModule,
    MatSelectModule,
    MatMenuModule
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
    FormsModule,
    MatSelectModule,
    MatMenuModule    
  ],
  declarations: [MaterialBaseComponent, MaterialButtonComponent, MaterialInputComponent, MaterialListComponent, ItemEmpleadoComponent]
})
export class MaterialModule { }
