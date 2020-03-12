import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestausService } from './services/restaus/restaus.service';
import { RestauModule } from '../modules/restau/restaus/restau.module';
import { AuthService } from './services/auth/auth.service';
import { AuthModule } from '../modules/auth/auth/auth.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestauModule,
    AuthModule
  ],
  exports: [RestauModule, AuthModule],
  providers: [RestausService, AuthService]
})
export class CoreModule { }
