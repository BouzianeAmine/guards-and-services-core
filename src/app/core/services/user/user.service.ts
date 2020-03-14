import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { User } from '../../model/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(null);

  constructor(private localService: LocalStorageService) { }

  getUsers(): Array<User> {
    let users = this.localService.get('users')
    this.users.next(users)
    return users;
  }

  getUser(name) {
    return this.getUsers().filter((user: User) => user.username == name)[0]
  }

  addUser(user: User) {
    return this.localService.set('users', [...this.getUsers(), user])
  }

  updateUser(name){
    let user=this.getUser(name);
    //this.setUser(user); 
  }

  

}
