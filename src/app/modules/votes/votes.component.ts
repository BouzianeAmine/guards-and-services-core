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

  //calculer le nombre de voteur par compter nombre de vote, parce qu'on sait bien que le user à le droit de voter qu'une seule fois dans une journée
  getNumberOfVoters() {
    return this.votes.length
  }

  // le nombre de users c'est a longueur de la liste
  getNumberOfUsers() {
    return this.userService.getUsers().length
  }

  voteStats() {
    let domacVotes = this.votes.filter(vote => vote.nom === 'DoMac').length
    let bkVotes = this.votes.filter(vote => vote.nom === 'Burger king').length
    let subwayVotes = this.votes.filter(vote => vote.nom === 'Subway').length
    return [{ nom: "DoMac", nbvote: domacVotes }, { nom: "Burger king", nbvote: bkVotes }, { nom: "Subway", nbvote: subwayVotes }]
  }

  voteStat(vote){
    return this.votes.filter(voteIt => voteIt.nom === vote.nom).length

  }
}
