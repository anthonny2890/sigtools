import { Component, ViewChild, AfterContentInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'app';
  height: number = 50;
  width: number = 230;
 
  msg:string;
 

  constructor (){ }
  
  ngOnInit() {}
  
}

