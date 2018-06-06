import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialBaseComponent } from './material/material-base/material-base.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'material-base',
    component: MaterialBaseComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}