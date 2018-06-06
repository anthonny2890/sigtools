import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../model/apod';
import { Observable } from 'rxjs';
 
const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'EQoG4zFho9HLYiMqCTrU2AlcppANDGO3liV2EiWn';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(private httpClient: HttpClient) {}

  getApod(): Observable<Apod>{
  // Template Literals
  return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }

}
