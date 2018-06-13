import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialBaseComponent } from './material/material-base/material-base.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MarsComponent } from './mars/mars.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'material-base',
    component: MaterialBaseComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mars',
    component: MarsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}