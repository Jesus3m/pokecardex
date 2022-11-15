import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   const authToken = localStorage.getItem('refresh');
   const clonedRequest = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer '+authToken)

        });

    return next.handle(clonedRequest);
  }
}
