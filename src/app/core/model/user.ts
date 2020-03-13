export class User {
    constructor(obj?:Partial<User>){
        Object.assign(this,obj)
    }
    username:string;
    voted?:boolean;
}