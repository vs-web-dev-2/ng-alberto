import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
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
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'divisas',
    loadChildren: () => import('./divisas/divisas.module').then(m => m.DivisasModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
