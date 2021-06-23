import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {

  @Input() public cotizaciones: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
