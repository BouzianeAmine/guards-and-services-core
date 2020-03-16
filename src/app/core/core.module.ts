import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestausService } from './services/restaus/restaus.service';
import { RestauModule } from '../modules/restau/restaus/restau.module';
import { AuthService } from './services/auth/auth.service';
import { AuthModule } from '../modules/auth/auth/auth.module';
import { AddRestauModule } from '../modules/add-restau/add-restau.module';
import { VotesModule } from '../modules/votes/votes.module';
import { UserService } from './services/user/user.service';
import { VoteGuardGuard } from './guards/vote-guard.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestauModule,
    AuthModule,
    AddRestauModule,
    VotesModule    
  ],
  exports: [RestauModule, AuthModule, AddRestauModule, VotesModule],
  providers: [RestausService, AuthService, UserService]
})
export class CoreModule { }
