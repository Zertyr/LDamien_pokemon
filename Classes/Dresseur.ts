import Pokemon from "../Interfaces/Pokemon";
import Pokeball from "./Pokeball";

// Classe Dresseur qui aura un nombre de pokéball
export class Dresseur {
    private _nom: string;
    _pokeballs!: Pokeball[];

    constructor(nom:string){
        this._nom = nom;
    }

    get nom(){
        return this._nom;
    }
    
    /**
     * Permet d'ajouter des pokeballs au dresseur
     * @param nombre : Indique le nombre à ajouter
     */
    ajouterPokeballs(nombre: number): void{
        let nbPokeball = 0;
        if(this._pokeballs != null){
            nbPokeball = this._pokeballs.length + nombre;
        }else {
            nbPokeball = 0;
            this._pokeballs = [];
        }
        if(nbPokeball <= 6){
            for (let index = 0; index < nombre; index++) {
                let pokeball = new Pokeball;
                this._pokeballs.push(pokeball)
            }
            console.log(`Vous avez ajouteé ${nombre} pokeball sur vous, vous possedez donc ${this._pokeballs.length} pokeball.`);
        }else {
            console.log(`Vous ne pouvez pas ajouter ${nombre} pokeball car vous en avez déjà ${this._pokeballs.length} sur vous.`);
        }

    }

    /**
     * permet de savoir si il reste des pokeballs vide
     * @returns : boolean
     */
    private getPokeballs():boolean {
        let compteur = 0;
        if(this._pokeballs != null){
            this._pokeballs.map((pokeball)=>{
                if(pokeball.verifVide() == true) compteur++;
            })
            if(compteur > 0) {
                console.log(`Vous avez ${compteur} pokeball disponible`);
                return true;
            } else {
                console.log(`Vous n'avez pas de pokeball disponible`);
                return false;
            }
        } else {
            console.log(`Vous n'avez pas de pokeball`);
            return false;
        }
    }

    /**
     * Permet de remplir la pokeball vide avec un pokemon
     * @param cible : Pokemon a mettre dans la pokeball
     * @param dresseur : Dresseur à qui appartien la pokeball
     */
    private fillEmptyPokeball(cible: Pokemon, dresseur: Dresseur): void {
        let compteur = 0;
        let enregistrer = false;
        this._pokeballs.forEach(pokeball => {
            compteur += 1;
            if(pokeball.verifVide() && enregistrer == false ){
                enregistrer = true;
                pokeball.affecterPokemon(cible);
                pokeball.affecterDresseur(dresseur);
                console.log(`Le pokemon ${cible._nom} a été ajouté dans votre pokeball numéro ${compteur}.`);
            } 
        })
    }

    /**
     * Permet de capturer un pokemon
     * @param pokemon : le pokemon a capturer
     */
    capturer(pokemon: Pokemon):void{
        if(pokemon._captif === false){
            if(this.getPokeballs() == true){
                this.fillEmptyPokeball(pokemon, this);
            }else {
                console.log(`Vous ne pouvez pas capturer ce pokemon car vous n'avez plus de pokeball disponible.`);
            }
        } else {
            console.log(`On ne peut pas encore voler le pokémon d'un autre dresseur`);
        }
    }

    /**
     * affiche tout les pokemons que le dresseur à sur lui
     */
    getPokemons():void{
        let compteur = 0;
        if(this._pokeballs != null){
            this._pokeballs.forEach(pokeball => {
                compteur += 1;
                try {
                console.log(`Pokeball n°${compteur} : ${pokeball._contient._nom} | type: ${pokeball._contient._type} | pv: ${pokeball._contient._pv}/${pokeball._contient._pvMax} `);
                } catch (error) {
                }
            })
        }else {
            console.log(`Vous n'avez pas de pokeball`);
        }
    }
}