# dev-excuses



## Enoncé du test
Créer l’application "Excuses de Dev", c’est un générateur de phrase pour faire patienter les utilisateurs.
- Backend
   - Une route qui liste les excuses (voir liste non exhaustive en bas de document)
   - Une route qui permet l’ajout d'une excuse à la liste des excuses
- Frontend
   - Détails:  
Une interface minimaliste avec un titre, une phrase générée et un bouton.
(utiliser le framework de votre choix)
Une fois la phrase générée, afficher la phrase excuse au centre de l'écran avec le bouton en dessous
pour générer une nouvelle phrase.

   - Découpe des composants :
      - Un composant principal qui affiche le titre, la phrase et le bouton
      - Un sous-composant pour le bouton qui va générer la phrase et l’envoyer au composant
parent.

   - Les différentes routes :
      - "/" => Page principale "Les excuses de dev".
      - "/lost" => Page affichant "i’m lost" avec un gif au centre de la page. Après 5 secondes redirection sur
"/".
      - "*" => Page d’erreur 404
      - “/$http_code” => Page affichant le message correspond au code http

Le sous-composant bouton va chercher dans un tableau (au préalable récupéré depuis le backend) une
phrase aléatoirement dans un store.
(attention, ne pas renvoyer la même phrase)

- Bonus (en option)
   - Alimenter les excuses via le backend    
Un bouton ouvre une modale pour saisir une nouvelle excuse (saisie libre). Un bouton "Valider" procède
à l’enregistrement dans le backend.
La nouvelle excuse est immédiatement disponible.

   - Illusion de labeur  
Lors du click, ajouter un loader avec un temps de chargement aléatoire entre 1 seconde et 5 secondes
avant d’afficher le résultat.
   - Animations  
Lors de l'arrivée sur la page, afficher le titre au centre de l’écran avec un "Fade In". Après 2 secondes
afficher le bouton au centre avec une animation déplaçant le titre en haut de l’écran.

