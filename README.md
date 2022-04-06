#Questions :

**1. Le diagramme respecte-t-il le principe de responsabilité unique ? (1 point)**
Oui il repecte le principe de responsabilité unique.
**2. Pourquoi ? (1 point)**
Car chaque classes sont axées sur une seule préoccupation (1 classe par pokemon, une classe pour la gestion des pokeballs etc...), et chaque classe va gérer sa gestion.

**3. Le diagramme respecte-t-il le principe Open/Closed ? (1 point)**  
Oui il respecte le principe Open/closed.
**4. Pourquoi ? (1 point)**  
Car avec les interfaces ici "Pokemon" et "Type" on peut facilement étendre. Et une méthode ne prend pas en charge tout les cas possible.
Bulbizarre est un "Pokemon", il hérite de TypePlante qui lui viens de Type.

**5. Le diagramme respecte-t-il le principe de substitution de Liskov ? (1 point)**  
Non il ne respecte pas.
**6. Pourquoi ? (1 point)**  
Car ici par exemple si on viens ajouter un nouveau sous-type on doit par la même occasion rajouter une fonction dans type.ts pour calculer les dégâts avec ce nouveau type. Et donc on doit toucher aux autres type de plus on vérifie les types dans un switch(dans mon code)

**7. Le diagramme respecte-t-il le principe de ségrégation des interfaces ? (1 point)**  
Non il ne respecte pas le principe de ségrégation des interfaces.

**8. Pourquoi ? (1 point)**  
Car ici nous avons deux interfaces "mères" qui englobe tout les types, tout les pokemons.

**9. Le diagramme respecte-t-il le principe d'inversion des dépendences ? (1 point)**  
Non même si en partie c'est le cas.
**10. Pourquoi ? (1 point)**  
Nos différents pokémon hérite bien d'une classe abstraite pour leur type mais ils dépendents de l'interface Pokemon.

**11. Proposez un diagramme alternatif (2 point)**  

**12. Déposez votre projet sur github et précisez le lien (1 point)**  