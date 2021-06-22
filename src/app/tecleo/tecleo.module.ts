import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TecleoComponent } from './tecleo.component';

@NgModule({
  declarations: [TecleoComponent],
  imports: [CommonModule, FormsModule],
  exports: [TecleoComponent],
})
export class TecleoModule {}
