import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { DataService } from '../shared/services/data.service';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;
 error: string;

  constructor(private nasaApi: NasaApiService,private dataService: DataService, private appComponent: AppComponent, domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.nasaApi.getApod()
    .subscribe((data:Apod) => {

      setTimeout(() => {
        this.apod = data;
      }, 2000);

    }, error => {

      setTimeout(() => {
        this.error = 'Error al conectar con el Servidor.';
        this.appComponent.showJqxNotificationError(this.error);
        
      }, 2000);
      
      console.log(this.error)
    });
  }

}
