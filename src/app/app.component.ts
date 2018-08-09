import { Component, ViewChild, AfterContentInit  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 
  
  @ViewChild('jqxNotificationInfo') jqxNotificationInfo: jqxNotificationComponent;
  @ViewChild('jqxNotificationSuccess') jqxNotificationSuccess: jqxNotificationComponent;
  @ViewChild('jqxNotificationWarning') jqxNotificationWarning: jqxNotificationComponent;
  @ViewChild('jqxNotificationError') jqxNotificationError: jqxNotificationComponent;
  @ViewChild('jqxNotificationMail') jqxNotificationMail: jqxNotificationComponent;
  @ViewChild('jqxNotificationTime') jqxNotificationTime: jqxNotificationComponent;
 
 template = {
   
 }

  userClaims = {
  FirstName : '',
  LastName : '',
  FotoUrl : '',
  WelcomeMsg : ''
};
  
  title = 'app';
  height: number = 50;
  width: number = 230;
 
  msg:string;
 


  constructor (private router: Router, private userService: UserService){ }
  
  ngOnInit() {
    this.getUserClaims();
  }
 
  getUserClaims(){
    this.userService.getUserClaims().subscribe((data:any)=>{
      this.userClaims = data;
      this.userClaims.WelcomeMsg = `Bienvenido ${this.userClaims.FirstName}, ${this.userClaims.LastName}`
      console.log("response:", this.userClaims);
   });

  }
  
  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
    this.userClaims.WelcomeMsg = '';   

    this.showJqxNotificationWarning("Se cerró la sesión con éxito.");
  }

  showJqxNotificationInfo(msg: string){
    var jqxMsg = document.getElementById('jqxMsg-info');
    jqxMsg.innerText = msg;
    this.jqxNotificationInfo.open();
  }

  showJqxNotificationSuccess(msg: string){
    var jqxMsg = document.getElementById('jqxMsg-success');
    jqxMsg.innerText = msg;
    this.jqxNotificationSuccess.open();
  }

  showJqxNotificationWarning(msg: string){
    var jqxMsg = document.getElementById('jqxMsg-warning');
    jqxMsg.innerText = msg;
    this.jqxNotificationWarning.open();
  }

  showJqxNotificationError(msg: string){
    var jqxMsg = document.getElementById('jqxMsg-error');
    jqxMsg.innerText = msg;
    this.jqxNotificationError.open();
  }

  showJqxNotificationMail(msg: string){
    var jqxMsg = document.getElementById('jqxMsg-mail');
    jqxMsg.innerText = msg;
    this.jqxNotificationMail.open();
  }

  showJqxNotificationTime(msg: string){
    var jqxMsg = document.getElementById('jqxMsg-time');
    jqxMsg.innerText = msg;
    this.jqxNotificationTime.open();
  }
}

