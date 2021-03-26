import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as url from 'src/assets/API_ROUTE.json'
import { authenRespond } from "../class/authenticationRespond";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private snakeBar: MatSnackBar, private router: Router) { }



  login(info: {email:string, password: string}) {
    return this.http.post<authenRespond>(url.LOCALHOST + url.USER + url.SIGN_IN,info);
  }

  tokenExpired() {
    console.log("invalid token or token expired. Please log in again");
    localStorage.removeItem("uid");
    localStorage.removeItem("token");
    this.snakeBar.open("Token expired. Please log in again", "", {
      duration: 3000,
      horizontalPosition: "center",
    });
    this.router.navigate(['/'])
  }

  notLogin() {
    console.log("Not log in.");
    this.snakeBar.open("Please log in.", "", {
      duration: 3000,
      horizontalPosition: "center",
    });
    this.router.navigate(['/'])
  }
}
