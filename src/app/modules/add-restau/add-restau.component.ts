import { Component, OnInit } from '@angular/core';
import { AddRestauService } from 'src/app/core/services/add-restau/add-restau.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Restaurent } from 'src/app/core/model/restaurent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restau',
  templateUrl: './add-restau.component.html',
  styleUrls: ['./add-restau.component.scss']
})
export class AddRestauComponent implements OnInit {
  restau = new FormGroup({
    nom: new FormControl(''),
    no: new FormControl(''),
    codePostale: new FormControl(''),
    ville: new FormControl(''),
    rue: new FormControl('')
  })

  constructor(private addService: AddRestauService,private router:Router) {}

  ngOnInit() {
  }

  add() {
    this.addService.addRestau(
      {
        nom: this.restau.get('nom').value,
        adresse: {
          codePostale: this.restau.get('codePostale').value,
          no: this.restau.get('no').value,
          rue: this.restau.get('rue').value,
          ville: this.restau.get('ville').value
        }
      }
    )
    this.restau.reset()
    this.router.navigate(['restaus'])
  }

}
