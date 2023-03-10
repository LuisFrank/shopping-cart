import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { postLoginURL } from '../config/api';

interface LoginResponse{
  email: string;
  id: number;
  token: string;
  refreshToken: string;
  userName: string;
  data:any;
  name:string;
  status:string;
  message:string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router: Router,private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

   // Handle errors
   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  // Verify user credentials on server to get token
  loginForm(data:any): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(postLoginURL, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // After login save token and other values(if any) in localStorage
  setUser(resp: LoginResponse) {
    localStorage.setItem('email', resp.email); 
    localStorage.setItem('userName', resp.userName);
    localStorage.setItem('token', resp.token);
    // this.router.navigate(['/dashboard']);
  }

  navigateByUrl(returnURL: string){
    this.router.navigateByUrl(returnURL);
  }

  // Checking if token is set
  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  // After clearing localStorage redirect to login screen
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


  // Get data from server for Dashboard
  getData(data:any): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(postLoginURL, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


}
