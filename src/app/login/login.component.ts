import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formLogin: NgForm) {
    console.log(formLogin.value);  // { first: '', last: '' }
    console.log(formLogin.valid);  // false
  }

}
