import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { LoginResponse, LoginUser, User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService,private router:Router) { }

  model: LoginUser = new LoginUser();
  user: User = new User();
  loggedIn: Boolean;
  loginResponse: LoginResponse = new LoginResponse();
  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log("model" + this.model);
    this.accountService.login(this.model).subscribe(data => {
      this.loginResponse = data;
      if (this.loginResponse.success) this.loggedIn = true;
      else this.loggedIn = false;
      if (this.loggedIn) {
        console.log("loginResponse" + this.loginResponse.data.email + ":" + this.loginResponse.data.password);
        //localStorage.setItem("isLogged", this.loginResponse.data.email);
        this.router.navigate(['/main']);
      }
      else
      {
        console.log("Log out")
      }
    });

  }



}
