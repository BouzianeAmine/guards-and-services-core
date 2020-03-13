import { Component, OnInit } from '@angular/core';
import { VotesService } from 'src/app/core/services/votes/votes.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  votes: Array<any>
  constructor(private voteService: VotesService) { }
  
  ngOnInit(): void {
    this.getVotes();
  }

  getVotes() {
    this.votes = this.voteService.getVotes()
  }

}
