import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { TecleoComponent } from './tecleo/tecleo.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
  },

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
