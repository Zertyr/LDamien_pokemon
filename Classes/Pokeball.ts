import Pokemon from "../Interfaces/Pokemon";
import { Dresseur } from "./Dresseur";

// Classe de ma pokeball qui peut contenir un pokémon
export default class Pokeball {
    _contient!: Pokemon;
    _proprietaire!: Dresseur;


    /**
     * On affiche les informations le pokemon à la pokeball
     */
    getContenu():void{
        if(this._contient != null){
            console.log(`La pokeball contient : ${this._contient._nom}.\nEt elle appartient à : ${this._proprietaire}`);
        } else {
            console.log(`La pokeball est vide.\nEt elle appartient à : ${this._proprietaire}`);
        }
    }

    /**
     * On affecte le pokemon à la pokeball
     * @param cible : Le pokemon à affecter a la pokeball
     * @returns 
     */
    affecterPokemon(cible: Pokemon):Pokemon{
        return this._contient = cible;
    }

    /**
     * On affecte un propriétaire à la pokeball
     * @param proprietaire : Le dresseur à qui appartient la pokeball
     * @returns 
     */
    affecterDresseur(proprietaire: Dresseur):Dresseur{
        return this._proprietaire = proprietaire;
    }

    verifVide(): boolean{
        if(!this._contient){
            return true;
        } else {
            return false;
        }
    }
}