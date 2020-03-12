import { Injectable } from '@angular/core';
import { toJson,toString } from '../../consts/consts';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public set(name:string,val){
    sessionStorage.setItem(name,toString(val))
  }

  public get(name:string){
    return toJson(sessionStorage.getItem(name))
  }

  public delete(name:string){
     sessionStorage.removeItem(name)
  }

  
}
