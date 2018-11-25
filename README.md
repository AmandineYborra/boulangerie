# boulangerie
Créez une classe Produit :

    nom
    prix

Créez une classe Panier avec :

    une méthode ajoute( produit )
    une méthode retire( produit )
    une proprieté totalHT
    une proprieté totalTTC

Utilisation : ajouter ce qu'il faut à ce code de base pour qu'il fonctionne.

var baguette = new Produit( 'Baguette', 0.85); // prix HT
var croissant = new Produit( 'Croissant', 0.80);

var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log(panier.totalHT);
console.log(panier.totalTTC);   
