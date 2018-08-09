import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialBaseComponent } from './material/material-base/material-base.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MarsComponent } from './mars/mars.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'material-base',
    component: MaterialBaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mars',
    component: MarsComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}