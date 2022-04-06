import Type from "../Interfaces/Type";

export default class TypePlante implements Type {
    _degats:number;

    constructor(degats:number){
        this._degats = degats;
    }

    /**
     * Sert a indiquer les dégats Feu par rapport au type
     */
    attaquerEau(): number {
        return this._degats * 2;
    }

    /**
     * Sert a indiquer les dégats Feu par rapport au type
     */
     attaquerFeu(): number {
        return this._degats * 0.5;
    }

    /**
     * Sert a indiquer les dégats Feu par rapport au type
     */
     attaquerPlante(): number {
        return this._degats * 1;
    }
}