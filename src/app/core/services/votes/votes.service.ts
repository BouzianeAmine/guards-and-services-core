import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { SessionStorageService } from '../sessionStorage/session-storage.service';
import { AuthService } from '../auth/auth.service';
import { Restaurent } from '../../model/restaurent';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor(private localService: LocalStorageService, private sessionService: SessionStorageService, private authService: AuthService) { }

  add(votes) {
    if (!(votes.length == 0) && this.getVotes().length > 0) {
      this.localService.set("votes", [...this.localService.get('votes'),...votes])
    }else this.localService.set("votes",votes)
  }

  getVotes():Array<Restaurent>{
    return this.localService.get('votes');
  }
}
