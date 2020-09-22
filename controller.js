
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	
	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	
	this.onInteractionStart = function(drag){
		if(this.currEditingMode) {
			this.currentShape = new Line(drag.initX, drag.initY, drag.initX, drag.initY, this.currLineWidth, this.currColour);
		} else {
			this.currentShape = new Rectangle(drag.initX, drag.initY, 0, 0, this.currLineWidth, this.currColour);
		}
		//this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionUpdate = function(drag){
		if(this.currEditingMode) {
			this.currentShape.finalX = drag.finalX;
			this.currentShape.finalY = drag.finalY;
		} else {
			this.currentShape.longueur = Math.abs(drag.finalX - drag.initX);
			this.currentShape.largeur = Math.abs(drag.finalY - drag.initY);
		}
		//this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function(drag){
		if(this.currEditingMode) {
			this.currentShape.finalX = drag.finalX;
			this.currentShape.finalY = drag.finalY;
		} else {
			this.currentShape.longueur = Math.abs(drag.finalX - drag.initX);
			this.currentShape.largeur = Math.abs(drag.finalY - drag.initY);
		}

		drawing.addForme(this.currentShape);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.drawRect = function() {
		this.currEditingMode = editingMode.rect;
	}.bind(this);

	this.drawLine = function() {
		this.currEditingMode = editingMode.line;
	}.bind(this);

	this.changeEpaisseur = function(val) {
		this.currLineWidth = parseInt(val);
	}.bind(this);

	this.changeColor = function(col) {
		this.currColour = col;
	}.bind(this);

	document.getElementById("butRect").addEventListener("click", this.drawRect, false);
	document.getElementById("butLine").addEventListener("click", this.drawLine, false);
	var spinner = document.getElementById("spinnerWidth");
	spinner.addEventListener("keyup", this.changeEpaisseur(spinner.value), false);
	var color = document.getElementById("colour");
	color.addEventListener("change", this.changeColor(color.value), false);
};


