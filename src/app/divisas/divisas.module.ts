import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DivisasRoutingModule } from './divisas-routing.module';
import { DivisasComponent } from './divisas.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';




@NgModule({
  declarations: [
    DivisasComponent,
    CotizacionesComponent
  ],
  imports: [
    CommonModule,
    DivisasRoutingModule,
  ]
})
export class DivisasModule { }
