# Questions :

**1. Le diagramme respecte-t-il le principe de responsabilité unique ? (1 point)**<br>
Oui il repecte le principe de responsabilité unique. <br>
**2. Pourquoi ? (1 point)**<br>
Car chaque classes sont axées sur une seule préoccupation (1 classe par pokemon, une classe pour la gestion des pokeballs etc...), et chaque classe va gérer sa gestion.<br>

**3. Le diagramme respecte-t-il le principe Open/Closed ? (1 point)**<br>
Oui il respecte le principe Open/closed.<br>
**4. Pourquoi ? (1 point)**<br>
Car avec les interfaces ici "Pokemon" et "Type" on peut facilement étendre. Et une méthode ne prend pas en charge tout les cas possible.
Bulbizarre est un "Pokemon", il hérite de TypePlante qui lui viens de Type.<br>

**5. Le diagramme respecte-t-il le principe de substitution de Liskov ? (1 point)**<br>
Non il ne respecte pas.<br>
**6. Pourquoi ? (1 point)**<br>
Car ici par exemple si on viens ajouter un nouveau sous-type on doit par la même occasion rajouter une fonction dans type.ts pour calculer les dégâts avec ce nouveau type. Et donc on doit toucher aux autres type de plus on vérifie les types dans un switch(dans mon code)<br>

**7. Le diagramme respecte-t-il le principe de ségrégation des interfaces ? (1 point)**<br>
Non il ne respecte pas le principe de ségrégation des interfaces.<br>
**8. Pourquoi ? (1 point)**<br>
Car ici nous avons deux interfaces "mères" qui englobe tout les types, tout les pokemons.<br>

**9. Le diagramme respecte-t-il le principe d'inversion des dépendences ? (1 point)**<br>
Non même si en partie c'est le cas.<br>
**10. Pourquoi ? (1 point)**<br>
Nos différents pokémon hérite bien d'une classe abstraite pour leur type mais ils dépendents de l'interface Pokemon.<br>

**11. Proposez un diagramme alternatif (2 point)**<br>

**12. Déposez votre projet sur github et précisez le lien (1 point)**<br>