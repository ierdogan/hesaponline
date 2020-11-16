import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse, User } from '../login/user';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private accountService: AccountService, private alertifyService:AlertifyService,private router:Router) { }

  model: User = new User();
  loginResponse:LoginResponse;

  ngOnInit(): void {
  }

  register(form: NgForm) {
    console.log("model" + this.model);
     this.accountService.register(this.model).subscribe(data => {
       this.loginResponse = data;
       if (this.loginResponse.success) 
        this.alertifyService.success(this.loginResponse.data.name+ " başarıyla eklendi.");
        this.accountService.logIn(this.loginResponse.data);
        this.router.navigate(['/main']);

     });

  }
}
