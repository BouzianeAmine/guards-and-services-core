import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CoreModule } from 'src/app/core/core.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent],
  providers:[]
})
export class HomeModule { }
