import { Injectable } from '@angular/core';
import { LoginUser,User } from '../login/user';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()

export class AccountService {

   constructor(private httpClient: HttpClient) { }

  path="http://localhost:5000/api/users/"
  loggedIn = false;
  user = new User;

  login(loginUser: LoginUser): boolean {
    // let headers = new HttpHeaders();
    // headers=headers.append("Content-Type","application/json");
    // this.httpClient.post(this.path+"login",loginUser,{headers:headers})
    // .pipe(
    //   tap(data => console.log(JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu " + err.error.message;

    }
    else {
      errorMessage = "Sistemsel bir hata!"
    }
    return throwError(errorMessage);

  }

}
