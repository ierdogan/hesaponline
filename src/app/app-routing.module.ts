import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'login',component : LoginComponent},
  {path : 'main',component : DashboardComponent},
  {path : 'intro',component : IntroComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
