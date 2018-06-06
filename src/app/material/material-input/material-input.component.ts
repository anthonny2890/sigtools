import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

empleado = {
  Nombre : "Anthonny"
}

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.empleado.Nombre = "Juan Pablo";
    }, 2000);
  }

  onKeyUp (Evento){
    console.log("OnKeyUp", Evento)
  }

  onBlur (Evento: FocusEvent){
    console.log("onBlur", Evento)
    
  }
}
