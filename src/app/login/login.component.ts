import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { UserService } from '../shared/services/user.service';
import { Usuario } from '../shared/model/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppComponent } from '../app.component';

  
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
  
  constructor(private userService : UserService, private router: Router, private appComponent: AppComponent) {


   }
  
  isLoginError: boolean;
 
 
  ngOnInit() {}

  onSubmit(formLogin: NgForm) {

    if(formLogin.valid){

      this.appComponent.showJqxNotificationInfo("Se envío el formulario correctamente.");    

      this.userService.userAuthentication(this.usuario.UserName,
         this.usuario.Password).subscribe((result:any) => {
        console.log("Resultado:", result);
        localStorage.setItem('userToken', result.access_token);
        this.router.navigate(['/home']);

        this.appComponent.getUserClaims();
            
        this.appComponent.showJqxNotificationSuccess("Bienvenido al Sistema Integrado de Gestion!");    

      }, (err : HttpErrorResponse)=>{
        this.isLoginError = true;
        console.log('error', err)

      });
    }      
    else{
       this.appComponent.showJqxNotificationError("El formulario contiene errores.");
    }                
    console.log(formLogin.valid);  // false
  }

  onClickCloseButton(){
    this.isLoginError = false;
  }

}
