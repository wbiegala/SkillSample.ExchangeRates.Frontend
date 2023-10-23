import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, filter, throwError } from 'rxjs';


@Injectable()
export class ConnectionErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      filter(event => event instanceof HttpResponse),
      catchError((error) => {
        if (error.status === 0) {
          this.router.navigate(['error']);
        }

        return throwError(() => error);
      }),
    );
  }

}
