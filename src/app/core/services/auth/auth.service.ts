import { Injectable } from '@angular/core';
import { SessionStorageService } from '../sessionStorage/session-storage.service';
import { toString } from '../../consts/consts';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentuser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  currentUser$: Observable<any> = this.currentuser.asObservable();
  private auth: boolean = false;

  constructor(private sessionService: SessionStorageService, private localService: LocalStorageService) { }

  connect(username: string) {
    if (this.verifUser(username)) {
      this.sessionService.set(username, new User({username}))
      this.currentuser.next(username)
      this.currentUser$.subscribe(value=>console.log(value))
      this.auth = true
      return true;
    } else {
      this.auth = false
      return false;
    }
  }

  deconnect() {
    this.auth = false
    console.log(this.currentUser$)
    this.currentuser.next(null);
  }

  verifUser(username) {
    return this.localService.get('users').filter((user:User) => user.username == username).length == 0 ? false : true;
  }

  public isAuth() {
    return this.auth;
  }
}
