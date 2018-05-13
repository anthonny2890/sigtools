import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialBaseComponent } from './material/material-base/material-base.component';

const routes: Routes = [
  {
    path: 'material-base',
    component: MaterialBaseComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}