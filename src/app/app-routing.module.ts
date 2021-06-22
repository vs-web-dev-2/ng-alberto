import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecleoComponent } from './tecleo/tecleo.component';

const routes: Routes = [
  {
    path: 'tecleo',
    component: TecleoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
