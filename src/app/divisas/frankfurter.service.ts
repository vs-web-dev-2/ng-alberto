import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrankfurterService {
  private url = "https://api.frankfurter.app/latest";
  //private http: HttpClient;

  constructor(private http: HttpClient) {
    //this.http = http;
  }

  public obtenerCotizaciones$() {
    return this.http.get(this.url);
  }
}
