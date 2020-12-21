Mastermind Ecrivez une fonction (mastermind).

L'utilisateur va devoir deviner une chaîne de trois lettres générée aléatoirement. 
Chacune de ces lettres est A, B, C, D ou E. 

L'utilisateur a droit à trois tentatives. A chaque tentative, on lui renvoie soit : 

    * ok (l'utilisateur a bien deviné). 
    * ko avec le détail pour chaque lettres (Non si la lettre n'est pas dans la chaîne à trouver,
    presque si elle y est mais pas à l'emplacement indiqué, oui si la lettre indiquée est la bonne). 

    Exemple L'utilisateur doit deviner la chaîne ABD. 
        * Premier essai : EAD renvoie [Non, presque, oui] 
        * Deuxième essai : ACD renvoie [oui, non, oui] 
        * Troisième essai : AAD renvoie [oui, presque, oui] et "perdu" (trois tentatives effectuées).
    Si l'utilisateur avait saisi ABD, il aurait eu comme message "gagné!".