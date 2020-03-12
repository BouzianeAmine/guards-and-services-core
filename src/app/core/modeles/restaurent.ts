export interface Restaurent {
    nom:string,
    adresse:Adresse
}

export interface Adresse {
    no:number,
    rue:string,
    codePostale:number,
    ville:string
}