import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {

  public fecha: Date = new Date();
  public cotizaciones: any[] = [];
  public cargado = false;

  constructor(http: HttpClient) {
    const url = "https://api.frankfurter.app/latest";
    http.get(url).subscribe(
      {
        next: (body: any) => {
          this.fecha = new Date(body.date);

          const rates: any = body.rates;

          Object.keys(rates).forEach((key) => {
            this.cotizaciones.push({
              divisa: key,
              contravalor: rates[key],
            });
          });
          this.cargado = true;
          console.log(this.cotizaciones);
        }
      }
    );
    console.log("llamada establecidad a " + url);
  }

  ngOnInit(): void {
  }

}
