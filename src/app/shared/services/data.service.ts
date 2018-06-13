import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private msgSrc = new BehaviorSubject<string>("default message!");
  currentMsg = this.msgSrc.asObservable();

  constructor() { }

  changeMessage(msg:string){
    this.msgSrc.next(msg);
  }
}
