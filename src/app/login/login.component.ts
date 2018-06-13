import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { UserService } from '../shared/services/user.service';
import { Usuario } from '../shared/model/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class LoginComponent implements OnInit {
   
  usuario: Usuario = {"UserName":"", "Password":""};

  @ViewChild('msgNotification') msgNotification: jqxNotificationComponent;
  
  constructor(private userService : UserService, private router: Router) { }
  
  msg:string;
  isLoginError: boolean;
 
 
  ngOnInit() {}

  onSubmit(formLogin: NgForm) {
    if(formLogin.valid){
      this.msg = "Se envío el formulario correctamente.";    

      this.userService.userAuthentication(this.usuario.UserName,
         this.usuario.Password).subscribe((result:any) => {
        console.log("Resultado:", result);
        localStorage.setItem('userToken', result.access_token);
        this.router.navigate(['/home']);

      }, (err : HttpErrorResponse)=>{
        this.isLoginError = true;
        console.log('error', err)

      });
    }      
    else
      this.msg = "El formulario contiene errores.";
    

   
    let currentMsg = document.getElementById('currentMsg');
    currentMsg.innerText = this.msg;
    this.msgNotification.open();

    //console.log(formLogin.value);  // { first: '', last: '' }
    console.log(formLogin.valid);  // false
  }

  onClickCloseButton(){
    this.isLoginError = false;
  }

}
