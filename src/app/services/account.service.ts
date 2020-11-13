import { Injectable } from '@angular/core';
import { LoginUser, User, LoginResponse } from '../login/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class AccountService {

  constructor(private httpClient: HttpClient,private router:Router) { }

  //path="/api/users/";
  path = "http://localhost:5000/api/users/";
  loggedIn = false;
  user = new User;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(loginUser: LoginUser): Observable<LoginResponse> {
    let headers = new HttpHeaders();
    console.log("user" + loginUser.email);

    const url = this.path + "login";
    console.log("url:" + url);
    return this.httpClient.post<LoginResponse>((url), loginUser, this.httpOptions).pipe(
      // tap((usr: User) => console.log(`fetched user=${usr.name}`)),
      // catchError(this.handleError<User>(`fetched user=${loginUser.password}`))
      // );
      tap(data => {
        if (data.success)
          this.logIn(data.data);
        else
          this.logOut();
      }),
      catchError(this.handleError)
    );

  }

  loginName() {
    if (localStorage.getItem("isLogged"))
      return localStorage.getItem("isLogged");
    else
      return "";

  }

  isLoggedIn() {
    if (localStorage.getItem("isLogged"))
      this.loggedIn = true;
    return this.loggedIn;
  }

  logIn(user: User) {
    this.loggedIn = true;
    localStorage.setItem("isLogged", user.name);
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
    this.router.navigate(['/intro']);
  }

  // handleError(err: HttpErrorResponse) {
  //   let errorMessage = ''
  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = "Bir hata oluştu " + err.error.message;

  //   }
  //   else {
  //     errorMessage = "Sistemsel bir hata!"
  //   }
  //   return throwError(errorMessage);

  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
