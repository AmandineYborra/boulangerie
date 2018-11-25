let Produit = function(produit, prix) {
  this.produit = produit;
  this.prix = prix;
};
var baguette = new Produit( 'Baguette', 0.85); // prix HT
var croissant = new Produit( 'Croissant', 0.80);

var Panier = function() {
    this.totalHT = 0;
    this.totalTTC = 0;
    this.ajoute = function(objet) {
        this.totalHT = this.totalHT + objet.prix;
        this.totalTTC =this.totalHT * 1.055;
    };
    this.retire = function(objet) {
        this.totalHT = this.totalHT - objet.prix;
        this.totalTTC = this.totalHT * 1.055;
    };
};
var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log(panier.totalHT);
console.log(panier.totalTTC);
