export default interface Type {
    _degats:number;

    /**
     * Sert a indiquer les dégats Feu par rapport au type
     */
    attaquerFeu();

    /**
     * Sert a indiquer les dégats Eau par rapport au type
     */
    attaquerEau();

    /**
     * Sert a indiquer les dégats Plante par rapport au type
     */
    attaquerPlante();
}