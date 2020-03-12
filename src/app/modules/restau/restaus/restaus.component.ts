import { Component, OnInit } from '@angular/core';
import { RestausService } from 'src/app/core/services/restaus/restaus.service';
import { Restaurent } from 'src/app/core/modeles/restaurent';

@Component({
  selector: 'app-restaus',
  templateUrl: './restaus.component.html',
  styleUrls: ['./restaus.component.scss']
})
export class RestausComponent implements OnInit {
  restaus: Array<Restaurent>
  date = Date.now();
  
  constructor(private restausService: RestausService) { }

  ngOnInit() {
    this.restausService.getRestaus().subscribe((restaus: Array<Restaurent>) => {
      this.restaus = restaus
    })
  }

}
