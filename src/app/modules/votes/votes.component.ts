import { Component, OnInit } from '@angular/core';
import { VotesService } from 'src/app/core/services/votes/votes.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Restaurent } from 'src/app/core/model/restaurent';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  votes: Array<Restaurent>
  constructor(private voteService: VotesService, private userService: UserService) { }

  ngOnInit(): void {
    this.getVotes();
  }

  getVotes() {
    this.votes = this.voteService.getVotes()
  }

  getNumberOfVoters() {
    return this.votes.length
  }

  getNumberOfUsers() {
    return this.userService.getUsers().length
  }

  voteStats() {
    let domacVotes = this.votes.filter(vote => vote.nom === 'DoMac').length
    let bkVotes = this.votes.filter(vote => vote.nom === 'Burger king').length
    let subwayVotes = this.votes.filter(vote => vote.nom === 'Subway').length
    return [...[], { nom: "DoMac", domacVotes }, { "nom": "BK", bkVotes }, { nom: "Subway", subwayVotes }]
  }

  voteStat(vote){
    return this.votes.filter(voteIt => voteIt.nom === vote.nom).length

  }
}
