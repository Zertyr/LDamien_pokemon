// Interface 'Pokemons' qui permettra de définir le tronc commun à tous mes pokémons

export default interface Pokemon {
    _nom: string;
    _pv: number;
    _pvMax: number;
    _type: string;
    _captif: boolean;
    _horsJeu: boolean;

    /**
     * Console log une phrase concernant l'attaque du pokémon
    */
    attaquer(cible: Pokemon): number;

    /**
     * Console log une phrase concernant le fait que le pokémon subis l'attaque
     */
    subirAttaque(degats: number): void;

    /**
     * Console log une phrase car si le pokemon est mort, il ne peut plus attaquer
     */
    checkVivant():void;


    /**
     * Restaure les pv du pokemon
     */
    soigner():void;

    /**
     * Permet de renommer le pokemon
     * @param nom: indiquer le nouveau nom en string
     */
    renommer(nom:string):void;

}