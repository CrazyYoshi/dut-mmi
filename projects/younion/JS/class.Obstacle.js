function Obstacle(p_x, p_y, p_hauteur, p_largeur, p_image) {	var CANVAS = $('#canvas')[0];	var CTX = CANVAS.getContext('2d');	this.x = p_x;	this.y = p_y;	this.hauteur = p_hauteur;	this.largeur = p_largeur;	this.font_obstacle = new Image();	this.font_obstacle.src = p_image;	Obstacle.prototype.drawObstacle = function() {		CTX.drawImage(this.font_obstacle, this.x, this.y, this.largeur, this.hauteur);	};	Obstacle.prototype.notAllowed = function(a, b) {		if (a >= this.x && a <= this.x + this.largeur && b >= this.y && b <= this.y + this.hauteur) return true;		else return false;	};	Obstacle.prototype.getDistanceEuclidienne = function(a, b) {		if (a < this.x && b < this.y) return Math.sqrt((this.x - a) ^ 2 + (this.y - b) ^ 2);		else if (a >= this.x && a <= this.x + this.largeur && b < this.y) return this.y - b;		else if (a > this.x + this.largeur && b < this.y) return Math.sqrt((this.x + this.largeur - a) ^ 2 + (this.y - b) ^ 2);		else if (a >= this.x + this.largeur && b >= this.y && b <= this.y + this.hauteur) return a - this.x - this.largeur;		else if (a > this.x + this.largeur && b > this.y + this.hauteur) return Math.sqrt((this.x + this.largeur - a) ^ 2 + (this.y + this.hauteur - b) ^ 2);		else if (a >= this.x && a <= this.x + this.largeur && b > this.y + this.hauteur) return b - this.y - this.hauteur;		else if (a < this.x && b > this.y + this.hauteur) return Math.sqrt((this.x - a) ^ 2 + (this.y + this.hauteur - b) ^ 2);		else return this.x - a;	};	Obstacle.prototype.getDistanceX = function(a, b) {		if (a < this.x) return this.x - a;		else if (a > this.x + this.largeur) return this.x + this.largeur - a;		else return 0;	};	Obstacle.prototype.getDistanceY = function(a, b) {		if (b < this.y) return this.y - b;		else if (b > this.y + this.hauteur) return this.y + this.hauteur - b;		else return 0;	};	Obstacle.prototype.toString = function() {		console.log("position :" + this.x + "," + this.y + ". Dimensions : " + this.largeur + "," + this.hauteur);	};	Obstacle.prototype.collision = function(x2, y2, l, h) {		if ((this.x - x2) > (l / 2) || (this.y - y2) > 0 || (x2 - this.x) > this.largeur + (l / 2) || (y2 - this.y) > this.hauteur * 2) return false;		else return true;	};}