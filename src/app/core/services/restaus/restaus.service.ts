import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurent } from '../../modeles/restaurent';
import { getLocalStorageRestaus } from '../../consts/consts';

@Injectable({
  providedIn: 'root'
})
export class RestausService {
  private readonly restaus: BehaviorSubject<Restaurent[]> = new BehaviorSubject<Restaurent[]>(null);
  private readonly restau$: Observable<Restaurent[]> = this.restaus.asObservable();

  constructor() { }

  getRestaus() {
    this.restaus.next(getLocalStorageRestaus());
    return this.restau$;
  }
}
