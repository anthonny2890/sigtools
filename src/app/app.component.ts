import { Component, ViewChild, Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { DataService } from './shared/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
 
  
  @ViewChild('jqxNotificationInfo') jqxNotificationInfo: jqxNotificationComponent;
  @ViewChild('jqxNotificationSuccess') jqxNotificationSuccess: jqxNotificationComponent;
  @ViewChild('jqxNotificationWarning') jqxNotificationWarning: jqxNotificationComponent;
  @ViewChild('jqxNotificationError') jqxNotificationError: jqxNotificationComponent;
  @ViewChild('jqxNotificationMail') jqxNotificationMail: jqxNotificationComponent;
  @ViewChild('jqxNotificationTime') jqxNotificationTime: jqxNotificationComponent;
 
 constructor (private router: Router, private userService: UserService, public dataService: DataService){ }
  
 template = {}

  title = 'app';
  height: number = 50;
  width: number = 230; 
  msg:string;
 

  ngOnInit() {}
 
  Logout(){       
    //Set SwitchAvatar Mode> Off
    this.dataService.switchAvatar(false);
    
    //Remove token from Client Side
    localStorage.removeItem('userToken');

    //Remove UserClaims
    localStorage.removeItem('UserName');
    localStorage.removeItem('FirstName');
    localStorage.removeItem('LastName');
    localStorage.removeItem('LoggedOn');
    localStorage.removeItem('Email');
    localStorage.removeItem('FotoUrl');

    //Redirect to login page
    this.router.navigate(['/login']);  
    this.showJqxNotificationWarning("Se cerró la sesión con éxito.");
  }

  //Reusable Notifications
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

  showUserClaims (){
    console.log('userClaims', this.dataService.getUserClaims())
  }
}

