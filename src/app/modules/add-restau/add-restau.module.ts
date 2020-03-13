import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRestauComponent } from './add-restau.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AddRestauComponent]
})
export class AddRestauModule { }
