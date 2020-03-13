export class Restaurent {
    public constructor(obj?: Partial<Restaurent>) {
        Object.assign(this, obj);
    }
    nom:string;
    adresse:Adresse;
    checked?: boolean;
}

export interface Adresse {
    no:number,
    rue:string,
    codePostale:number,
    ville:string
}