import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './modules/auth/auth/auth.component';
import { RestausComponent } from './modules/restau/restaus/restaus.component';
import { AddRestauComponent } from './modules/add-restau/add-restau.component';
import { VotesComponent } from './modules/votes/votes.component';



const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'restaus',
    component: RestausComponent
  },
  {
    path: 'addRestau',
    component: AddRestauComponent
  },
  {
    path:'votes',
    component:VotesComponent
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

