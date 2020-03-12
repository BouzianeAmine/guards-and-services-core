import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestausComponent } from './restaus.component';



@NgModule({
  declarations: [RestausComponent],
  imports: [
    CommonModule
  ],
  exports:[RestausComponent]
})
export class RestauModule { }
