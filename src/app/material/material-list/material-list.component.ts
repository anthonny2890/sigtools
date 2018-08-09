import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../shared/model/empleado';
import { ClassEmpleado } from '../../shared/model/class-empleado';
import { EmptyError } from 'rxjs';
//import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  empleados:ClassEmpleado[];

  constructor(//private loginComponent: LoginComponent
  ) {

   }

  ngOnInit() {

    //this.loginComponent.showJqxNotification('MaterialListComponent Ready!');
    console.log('Inicializando el componente MaterialList.');
   
    this.empleados = [
      new ClassEmpleado(1, 'Anthonny Alanoca', 'Tacna', 'https://scontent.flim17-1.fna.fbcdn.net/v/t1.0-9/13102711_1101903079831266_4359920557440080626_n.jpg?_nc_cat=0&oh=2c4b9e2d7803037fbafcf9a36d3e7d58&oe=5B7E495A'),
      new ClassEmpleado(2, 'Maria Flores', 'Tacna', 'https://scontent.flim17-1.fna.fbcdn.net/v/t1.0-9/19399684_1583356658355691_6694288838432578337_n.jpg?_nc_cat=0&oh=0f3a24600f72ccd8535f6b52d1b23048&oe=5B950326'),
      new ClassEmpleado(3, 'Anny Barriga', 'Tacna', 'https://scontent.flim17-1.fna.fbcdn.net/v/t1.0-9/28575579_2007112155970031_8951941285689455519_n.jpg?_nc_cat=0&oh=3b73d62b9cf10d2e80e09a342a4bc09d&oe=5B838005')

    ];

    setTimeout(() => {
      this.empleados[0].FotoUrl = '';
    }, 3000);

  }

  onMouseClick(Evento:ClassEmpleado){

    console.log('Click on:', Evento.Id);
  }
  
  onClick(Evento){
    console.log('evento',Evento);
  }  

}
