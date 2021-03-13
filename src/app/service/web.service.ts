import { Injectable } from '@angular/core';
import * as url from '../../assets/API_ROUTE.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  testConnection () {
    return this.http.get(url.LOCALHOST + url.GET_ALL_USER);
  }
}
