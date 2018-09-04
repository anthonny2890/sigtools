import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Usuario } from '../shared/model/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppComponent } from '../app.component';
import { DataService } from '../shared/services/data.service';
import { UserClaims } from '../shared/model/user-claims';

  
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
  
  constructor(private dataService : DataService, private userService : UserService, private router: Router, private appComponent: AppComponent) {


   }
  
  isLoginError: boolean;
  errorMessage: string;
 
  ngOnInit() {}

  onSubmit(formLogin: NgForm) {

    if(formLogin.valid){

      this.appComponent.showJqxNotificationInfo("Se envío el formulario correctamente.");    

      this.userService.userAuthentication(this.usuario.UserName,
         this.usuario.Password).subscribe((result:any) => {
        console.log("Authentication: ", result);
        localStorage.setItem('userToken', result.access_token);
        this.router.navigate(['/home']);

        this.userService.getUserClaims().subscribe((userClaims:UserClaims)=>{
          
          console.log('userClaims',userClaims);

          this.dataService.setUserClaims({ 
            UserName : userClaims.UserName,
            FirstName : userClaims.FirstName,
            LastName : userClaims.LastName,
            LoggedOn: userClaims.LoggedOn,
            Email: userClaims.Email,
            FotoUrl : this.dataService.getUserClaims().FotoUrl?this.dataService.getUserClaims().FotoUrl:this.dataService.DEFAULT_AVATAR
          });  
          //Setting UserClaims From Server on the localStorage From Client Side
          localStorage.setItem('UserName', this.dataService.getUserClaims().UserName);
          localStorage.setItem('FirstName', this.dataService.getUserClaims().FirstName);
          localStorage.setItem('LastName', this.dataService.getUserClaims().LastName);
          localStorage.setItem('LoggedOn', this.dataService.getUserClaims().LoggedOn);
          localStorage.setItem('Email', this.dataService.getUserClaims().Email);
          localStorage.setItem('FotoUrl', this.dataService.getUserClaims().FotoUrl);
         
          //Set SwitchAvatar Mode> On
          this.dataService.switchAvatar(true);       

          this.appComponent.showJqxNotificationSuccess(`${this.dataService.getUserClaims().FirstName}. Bienvenido al Sistema Integrado de Gestión.`);    

          
       }, (err : HttpErrorResponse)=>{    
        console.log('error', err.message)
      });;
            
       
      }
      , (err : HttpErrorResponse)=>{
        if(!err.message)
        this.errorMessage = "503 Service Unavailable.";
        else
        this.errorMessage = err.message;

        console.log('error message: ', err, this.errorMessage)
        this.isLoginError = true;

      }
    
    );
    }      
    else{
       this.appComponent.showJqxNotificationError("El formulario contiene errores.");
    }                
    console.log(formLogin.valid);  // false
  }

  onClickCloseButton(){
    this.isLoginError = false;
  }

  onClickForgotPassword(event){
    event.preventDefault();
  }

}
