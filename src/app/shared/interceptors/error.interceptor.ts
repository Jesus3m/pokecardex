import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from "rxjs/operators";
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public router:Router, private message: NzMessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
    .pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
                errorMsg = `Error: ${error.error.message}`;
              } else {
                errorMsg = `${error.error.error}`;
              }
              if(error.error.code === 403){
                this.router.navigate(["/auth/login"])
              }
              this.message.error(errorMsg)
            return throwError(errorMsg);
        })
    )
  }
}
