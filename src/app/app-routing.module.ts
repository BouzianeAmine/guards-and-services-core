import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './modules/auth/auth/auth.component';
import { RestausComponent } from './modules/restau/restaus/restaus.component';
import { AddRestauComponent } from './modules/add-restau/add-restau.component';
import { VotesComponent } from './modules/votes/votes.component';
import { AuthGuard } from './core/guards/auth.guard';



const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'restaus',
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
    path:'votes',
    component:VotesComponent,
    canActivate:[
      AuthGuard
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

