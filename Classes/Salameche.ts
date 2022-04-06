import Pokemon from "../Interfaces/Pokemon";
import TypeFeu from "./TypeFeu";

export default class Salameche extends TypeFeu implements Pokemon {
    _nom: string;
    _pv: number;
    _pvMax: number;
    _type: string;
    _captif: boolean;
    _horsJeu: boolean;

    
    constructor(pvMax:number,degats:number){
        super(degats);
        this._nom = 'Salamèche';
        this._type = 'Feu'
        this._pv = pvMax;
        this._pvMax = pvMax;
        this._captif = false;
        this._horsJeu = false;
    }

    /**
     * Attaque un pokemon cible et lui inflige des dégats
     * @param cible : Pokemon ciblé par l'attaque
     * @returns 
     */
    attaquer(cible: Pokemon): number {
        let degats:number = 0;
        switch (cible._type) {
            case 'Feu':
                degats = this.attaquerFeu();
                // cible.subirAttaque(degats)
                return degats;
            case 'Eau':
                degats = this.attaquerEau();
                // cible.subirAttaque(degats)
                return degats;
            case 'Plante':
                degats = this.attaquerPlante();
                // cible.subirAttaque(degats)
                return degats;
        }
        return degats;
    }

    /**
     * subit l'attaque d'un autre pokemon et soustrait les dégats aux pv
     * @param degats : Dégâts du pokemon attaquant
     * @returns 
     */
    subirAttaque(degats: number): void {
        this.checkVivant();
        if(this._horsJeu === false) {
            this._pv -= degats;
            console.log(`${this._nom} a pris ${degats} point de dégats, il lui reste donc ${this._pv} pv`);
        } else {
            console.log(`${this._nom} a pris ${degats} point de dégats, il lui reste donc ${this._pv} pv`);
        }
        this.checkVivant();
    }

    /**
     * soigne l'intégralité des pv du pokémon
     */
    soigner(): void {
        this._pv = this._pvMax;
        console.log(`Votre pokémon à récupérer tout ses pv !`);
    }

    /**
     * Renomme le pokémon
     * @param nom : le nouveau nom du pokémon
     */
    renommer(nom: string): void {
        this._nom = nom;
        console.log(`Votre pokémon s'appelle maintenant ${this._nom} !`);
    }

    /**
     * Check si le pokémon est vivant et met le boolean de horsjeu en conséquence
     */
    checkVivant(): void {
        if(this._pv <= 0){
            console.log(`${this._nom} est KO`);
            this._horsJeu = true;
        } else {
            this._horsJeu = false;
        }
    }
}