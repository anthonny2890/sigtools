import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {
  marsImages: MarsImage[];
  cameras: string[] = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI	', 'MARDI', 'NAVCAM', 'PANCAM', 'MINITES'];
  currentCamera: string;
  //Inyeccion de dependencias
  constructor(private servicio: NasaApiService) { }

  ngOnInit() {
    this.refreshView('FHAZ');
    this.currentCamera = this.cameras[0];
  }

  onSelectCamera(camera: string){
    this.refreshView(camera);
  }
  private refreshView(camera: string){
    this.servicio.getMarsImages(camera).subscribe(result => {
      this.marsImages = result.photos;
    });
  }
}
