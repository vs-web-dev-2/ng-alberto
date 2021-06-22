import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalComponent } from './portal.component';

@NgModule({
  declarations: [PortalComponent],
  imports: [CommonModule],
  exports: [PortalComponent],
})
export class PortalModule {}
