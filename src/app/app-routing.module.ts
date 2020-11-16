import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'login',component : LoginComponent},
  {path : 'main',component : DashboardComponent},
  {path : 'home',component : IntroComponent},
  {path : 'register',component : RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
