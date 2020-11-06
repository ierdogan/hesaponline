import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { LoginUser } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  model:LoginUser = new LoginUser;
  ngOnInit(): void {
  }

  login(form:NgForm){
    this.accountService.login(this.model);
  }

}
