import { Injectable } from '@angular/core';
import { LoginUser,User,LoginResponse } from '../login/user';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable()

export class AccountService {

   constructor(private httpClient: HttpClient) { }

  //path="/api/users/";
  path="http://localhost:5000/api/users/";
  loggedIn = false;
  user = new User;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  login(loginUser: LoginUser): Observable<LoginResponse> {
    let headers = new HttpHeaders();
    console.log("user"+loginUser.email);

    const url = this.path+"login";
    console.log("url:"+url);
    return this.httpClient.post<LoginResponse>((url), loginUser, this.httpOptions).pipe(
      // tap((usr: User) => console.log(`fetched user=${usr.name}`)),
      // catchError(this.handleError<User>(`fetched user=${loginUser.password}`))
    // );
    tap(data=>{
      //  console.log("success = get Filters from DB")
         console.log(JSON.stringify(data));
          console.log(data.data.name);
    }),
    catchError(this.handleError)
  );




  }

  isLoggedIn(){
    return this.loggedIn;
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
