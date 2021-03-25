import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem("token")){
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
            "Bearer " + localStorage.getItem("token"))
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
