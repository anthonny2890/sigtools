import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:63679/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  userAuthentication(UserName, Password){
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
   
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', UserName);
    urlSearchParams.append('password', Password);
    urlSearchParams.append('grant_type', 'password');

    let params = urlSearchParams.toString()
   
    return this.httpClient.post(`${SERVER_URL}Token`, params , {headers : reqHeader});
  }

  getUserClaims(){

    var userToken = localStorage.getItem('userToken');

    var reqHeader = new HttpHeaders({'Authorization': `Bearer ${userToken}`});
    
    return this.httpClient.get(`${SERVER_URL}api/Account/GetUserClaims`, { headers : reqHeader });
      


  }
}
