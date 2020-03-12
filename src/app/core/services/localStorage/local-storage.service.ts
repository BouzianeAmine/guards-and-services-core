import { Injectable } from '@angular/core';
import { toString ,toJson} from '../../consts/consts';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  public set(name:string,val){
    localStorage.setItem(name,toString(val))
  }

  public get(name:string){
    return toJson(localStorage.getItem(name))
  }

  public delete(name:string){
    return localStorage.removeItem(name)
  }
}
