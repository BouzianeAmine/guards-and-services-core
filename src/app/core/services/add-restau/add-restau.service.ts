import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Restaurent } from '../../model/restaurent';
import { RestausService } from '../restaus/restaus.service';

@Injectable({
  providedIn: 'root'
})
export class AddRestauService {

  constructor(private localService: LocalStorageService, private restausService: RestausService) { }

  addRestau(restau: Restaurent) {
    let restaus;
    this.restausService.getRestaus().subscribe(array => restaus = array);
    this.localService.set('restaus', [...restaus, restau])
  }
}
