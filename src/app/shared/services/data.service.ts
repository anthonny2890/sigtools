import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserClaims } from '../model/user-claims';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userClaims = new BehaviorSubject<UserClaims>(
                             { 
                              UserName : localStorage.getItem('UserName'),
                              FirstName : localStorage.getItem('FirstName'),
                              LastName : localStorage.getItem('LastName'),
                              LoggedOn: localStorage.getItem('LoggedOn'),
                              Email: localStorage.getItem('Email'),
                              FotoUrl : localStorage.getItem('FotoUrl')
                            }  
                          );
  currentUserClaims = this.userClaims.asObservable();  

  public avatar = new BehaviorSubject<string>(localStorage.getItem('SwitchAvatar'));
  currentAvatar = this.avatar.asObservable();

  readonly DEFAULT_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png";


  constructor() { }

  setUserClaims(userClaims:UserClaims){
    this.userClaims.next(userClaims);
  }

  getUserClaims(){
    return this.userClaims.getValue();
  }

  switchAvatar(state:boolean){
    if (state){
      localStorage.setItem('switchAvatar','show');  
      this.avatar.next("show");
    }
    else
    {
      localStorage.setItem('switchAvatar','hide'); 
      this.avatar.next("hide");
    }   
  }

  getAvatar(){
    return this.avatar.getValue();
  }
}
