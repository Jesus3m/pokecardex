import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { finalize } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private countRequest = 0;
  private idMessage: string = '';
  constructor(public router:Router, private message: NzMessageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.countRequest) {
      this.idMessage = this.message
         .loading('Cargando...', {
          nzDuration: 0
         }).messageId;
    }
    this.countRequest++;
    return next.handle(request)
      .pipe(
        finalize(() => {
          this.countRequest--;
          if (!this.countRequest) {
            this.message.remove(this.idMessage);
          }
        })
      );
  }
}
