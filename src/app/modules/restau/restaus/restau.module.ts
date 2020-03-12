import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestausComponent } from './restaus.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [RestausComponent],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[RestausComponent]
})
export class RestauModule { }
