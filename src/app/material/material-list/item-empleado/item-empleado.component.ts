import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClassEmpleado } from '../../../shared/model/class-empleado';

@Component({
  selector: 'app-item-empleado',
  templateUrl: './item-empleado.component.html',
  styleUrls: ['./item-empleado.component.css']
})
export class ItemEmpleadoComponent implements OnInit {
  
  readonly DEFAULT_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png';

  @Input()
  empleado: ClassEmpleado;

  @Output()
  onMouseClick = new EventEmitter<ClassEmpleado>();

  constructor() { }

  ngOnInit() {

  }

  onClick(e: ClassEmpleado){
    this.onMouseClick.emit(e);
  }
}
