import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as url from 'src/assets/API_ROUTE.json'
import { authenRespond } from "../class/authenticationRespond";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }



  login(info: {email:string, password: string}) {
    return this.http.post<authenRespond>(url.LOCALHOST + url.USER + url.SIGN_IN,info);
  }
}
