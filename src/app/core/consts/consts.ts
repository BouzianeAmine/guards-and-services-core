import { Restaurent } from '../modeles/restaurent';

export const restaus: Array<Restaurent> = [
    {
        nom: "Burger king",
        adresse: {
            codePostale: 69002,
            no: 1,
            rue: "confluence",
            ville: "Lyon"
        }
    },
    {
        nom: "DoMac",
        adresse: {
            codePostale: 69002,
            no: 2,
            rue: "confluence",
            ville: "Lyon"
        }
    },
    {
        nom: "Subway",
        adresse: {
            codePostale: 69002,
            no: 3,
            rue: "confluence",
            ville: "Lyon"
        }
    }
]

export function chargeToLocalStorage(){
    localStorage.setItem('users',JSON.stringify(users));
}

export function getLocalStorageRestaus():Array<Restaurent>{
    return JSON.parse(localStorage.getItem('restaus'));
}

export const users=[
    {
        username:"amine"
    },
    {
        username:'romain'
    },
    {
        username:"cyril"
    }
]



export function toJson(val){
    return JSON.parse(val)
}

export function toString(val){
    return JSON.stringify(val)
}