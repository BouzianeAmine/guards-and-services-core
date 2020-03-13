import { Component, OnInit } from '@angular/core';
import { RestausService } from 'src/app/core/services/restaus/restaus.service';
import { Restaurent } from 'src/app/core/modeles/restaurent';
import { restaus } from 'src/app/core/consts/consts';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-restaus',
  templateUrl: './restaus.component.html',
  styleUrls: ['./restaus.component.scss']
})
export class RestausComponent implements OnInit {
  restaus: Array<Restaurent>
  date = Date.now();
  votes: Array<Restaurent> = new Array<Restaurent>()
  check: boolean;
  constructor(private restausService: RestausService) { }

  ngOnInit() {
    this.restausService.getRestaus().subscribe((restaus: Array<Restaurent>) => {
      this.restaus = restaus
    })
  }
  //verifie d'abord s'il existe dans la liste pour eviter la redendance, sinon depandant de si checked ou pas on l'ajout ou on le supprime
  checked(event, restaurent: Restaurent) {
    if (event.checked && this.votes.find(restau => restau == restaurent) == undefined) {
      this.votes.push(restaurent)
    } else if (!event.checked) {
      this.votes = this.votes.filter(restau => restau != restaurent)  
    }
  }

  validate() {
    console.log(this.votes)
  }

}
