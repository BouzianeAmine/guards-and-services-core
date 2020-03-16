import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './modules/auth/auth/auth.component';
import { RestausComponent } from './modules/restau/restaus/restaus.component';
import { AddRestauComponent } from './modules/add-restau/add-restau.component';
import { VotesComponent } from './modules/votes/votes.component';
import { AuthGuard } from './core/guards/auth.guard';
import { VoteGuardGuard } from './core/guards/vote-guard.guard';



const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'votes',
    component: RestausComponent,
    canActivate:[
      AuthGuard
    ]
  },
  {
    path: 'addRestau',
    component: AddRestauComponent,
    canActivate:[
      AuthGuard
    ]
  },
  {
    path:'restaus',
    component:VotesComponent,
    canActivate:[
      AuthGuard,
      VoteGuardGuard
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

