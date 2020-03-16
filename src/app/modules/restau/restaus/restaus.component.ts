import { Component, OnInit } from '@angular/core';
import { RestausService } from 'src/app/core/services/restaus/restaus.service';
import { Restaurent, Adresse } from 'src/app/core/model/restaurent';
import { restaus } from 'src/app/core/consts/consts';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

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
  constructor(private restausService: RestausService, private router: Router) { }

  ngOnInit() {
    this.restausService.getRestaus().subscribe((restaus: Array<Restaurent>) => {
      this.restaus = restaus
    })
  }
  //verifie d'abord s'il existe dans la liste pour eviter la redendance, sinon depandant de si checked ou pas on l'ajout ou on le supprime
  checked(event, restaurent: Restaurent) {
    const res = this.votes.find(restau => restau == restaurent);
    if (event.checked && res == undefined) {
      this.votes.push(restaurent)
    } else if (!event.checked) {
      this.votes = this.votes.filter(restau => restau != restaurent)
    }
    this.validate();
  }

  //validate the votes, and navigate to the votes page to see the stats
  validate() {
    this.restausService.sendVots(this.votes)
    this.router.navigate(['restaus'])
  }

  //prettify l'affichage de l'adresse
  afficheAdresse(adress:Adresse){
    return `${adress.no} ${adress.rue} ${adress.ville} ${adress.codePostale}`
  }

}
