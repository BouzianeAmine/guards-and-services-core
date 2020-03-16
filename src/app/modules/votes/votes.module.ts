import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotesComponent } from './votes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [VotesComponent]
})
export class VotesModule  {
 
}
