import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurent } from '../../modeles/restaurent';
import { getLocalStorageRestaus } from '../../consts/consts';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RestausService {
  private readonly restaus: BehaviorSubject<Restaurent[]> = new BehaviorSubject<Restaurent[]>(null);
  private readonly restau$: Observable<Restaurent[]> = this.restaus.asObservable();

  constructor(private localService:LocalStorageService) { }

  getRestaus() {
    this.restaus.next(this.localService.get('restaus'));
    return this.restau$;
  }

}
