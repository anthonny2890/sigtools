import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe, of } from 'rxjs';

import {Router} from "@angular/router";
//import { map, takeUntil, tap} from 'rxjs/operators';
import {catchError} from "rxjs/internal/operators";
import { AppComponent } from '../../app.component';
import { DataService } from './data.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

constructor(private router: Router, private appComponent: AppComponent,private dataService: DataService) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

console.log("intercepted request ... ");

//Get userToken
var userToken = localStorage.getItem('userToken');

//Setting Headers
var reqHeader: HttpHeaders;
var cReq: HttpRequest<any>;

//Setting Authorization
if(userToken)
{
    reqHeader = new HttpHeaders({'Authorization': `Bearer ${userToken}`});
    cReq = req.clone({
        headers: reqHeader
      });       
}
else
    cReq = req;


return next.handle(cReq).pipe(
    catchError((error, caught) => {
        this.handleAuthError(error);
        return of(error);
      }) as any
  );

}
private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401) {
      //navigate login /delete cookies or whatever
      console.log('handled error ' + err.status);    
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(err.message);
    }

    if (err.status === 0) {
        //Set SwitchAvatar Mode> Off
        this.dataService.switchAvatar(false);
        //navigate login /delete cookies or whatever 
        console.log('handled error ' + err.message);
        localStorage.removeItem('userToken');
        this.router.navigate(['/login']);  
    }
    throw Error;
}
}
