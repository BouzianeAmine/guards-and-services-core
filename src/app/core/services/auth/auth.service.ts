import { Injectable } from '@angular/core';
import { SessionStorageService } from '../sessionStorage/session-storage.service';
import { toString } from '../../consts/consts';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentuser: Subject<any> = new Subject<any>();
  public readonly currentUser$: Observable<any> = this.currentuser.asObservable();
  private auth: boolean = false;

  constructor(private sessionService: SessionStorageService, private localService: LocalStorageService) { }

  connect(username: string) {
    if (this.verifUser(username)) {
      this.sessionService.set(username, username)
      this.currentuser.next(username)
      this.auth = true
      return true;
    } else {
      this.auth = false
      return false;
    }
  }

  deconnect() {
    this.auth = false
    this.currentUser$.subscribe(username => {
      this.sessionService.delete(username)
    })
    this.currentuser.next(null);
  }

  verifUser(username) {
    return this.localService.get('users').filter(element => element.username == username).length == 0 ? false : true;
  }

  public isAuth() {
    return this.auth;
  }
}
