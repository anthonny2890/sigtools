import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, pipe, of } from 'rxjs';

import {Router} from "@angular/router";
//import { map, takeUntil, tap} from 'rxjs/operators';
import {catchError} from "rxjs/internal/operators";

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    
     if (req.url.indexOf('/upload/file') === -1) {
      return next.handle(req); // do nothing
    }
    
console.log("intercepted request ... ");
return next.handle(req).pipe(
    catchError((error, caught) => {
        //intercept the respons error and displace it to the console
        console.log('error',error);
        this.handleAuthError(error);
        return of(error);
      }) as any
  );
}
private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401) {
      //navigate /delete cookies or whatever
      console.log('handled error ' + err.status);
      this.router.navigate([`/login`]);
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(err.message);
    }

    if (err.status === 0) {

        console.log(err.message)
    }
    throw Error;
}
}
