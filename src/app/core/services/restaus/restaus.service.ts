import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurent } from '../../model/restaurent';
import { getLocalStorageRestaus } from '../../consts/consts';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { VotesService } from '../votes/votes.service';
import { AuthService } from '../auth/auth.service';
import { SessionStorageService } from '../sessionStorage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RestausService {
  private readonly restaus: BehaviorSubject<Restaurent[]> = new BehaviorSubject<Restaurent[]>(null);
  private readonly restau$: Observable<Restaurent[]> = this.restaus.asObservable();

  constructor(private localService:LocalStorageService,private voteService:VotesService,private authService:AuthService,private sessionService:SessionStorageService) { }

  getRestaus() {
    this.restaus.next(this.localService.get('restaus'));
    return this.restau$;
  }

  sendVots(votes){
    let user;
    this.authService.currentUser$.subscribe(currentUser=>user=currentUser);
    this.sessionService.set(user,{user,voted:true})
    this.voteService.add(votes)
  }

}
