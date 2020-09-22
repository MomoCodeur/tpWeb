// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


class Forme {
    constructor (ep, col) {
        this.epaisseur = ep;
        this.couleur = col;
    }

    getCol() {
        return this.couleur;
    }

    getEpaisseur() {
        return this.epaisseur;
    }
    setColor(col) {
        this.couleur = col;
    }
}

class Rectangle extends Forme {
    constructor(debX, debY, long, large, ep, col) {
        super(ep, col);
        this.debutX = debX; this.debutY=debY;
        this.longueur = long; this.largeur = large;
    }
    getInitX() {
        return this.debutX;
    }

    getInitY() {
        return this.debutY;
    }

    getFinalX() {
        return this.longueur;
    }

    getFinalY() {
        return this.largeur;
    }
}

class Line extends Forme {
    constructor(debX, debY, finX, finY, ep, col) {
        super(ep, col);
        this.debutX = debX; this.debutY = debY;
        this.finalX = finX; this.finalY = finY;
    }

    getInitX() {
        return this.debutX;
    }

    getInitY() {
        return this.debutY;
    }

    getFinalX() {
        return this.finalX;
    }

    getFinalY() {
        return this.finalY;
    }
}

class Drawing {
    constructor() {
        this.formes = new Array();
    }

    addForme(shape) {
        this.formes.push(shape);
    }

    getForms() {
        return this.formes;
    }
}