import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
