import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor(private localService: LocalStorageService) { }

  add(votes) {
    if (!(votes.length == 0))
      this.localService.set("votes", [...this.localService.get('votes'), votes])
  }

  getVotes() {
    return this.localService.get('votes');
  }
}
