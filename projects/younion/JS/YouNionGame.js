$(document).ready(function() {
	var CADENCE = 30;
	var FPS = Math.floor(1000 / CADENCE);
	var CANVAS = $('#canvas')[0];
	var CTX = CANVAS.getContext('2d');
	var clavier = new Clavier();
	var perso = new Image();
	var fond = new Image();
	var gagne = new Image();
	var perdu = new Image();
	var frames = 8;
	var sprite_l = 32;
	var sprite_h = 64;
	var frame_num = 0;
	var flip = false;
	var orientation = 0;
	var vitesse = 6;
	var x = 584;
	var y = 599;
	var x1, y1;
	var jumping = true;
	var velY = 0;
	var keys = [];
	var gravity = 2.6;
	var quelObstacle = -1;
	var timeTemps = 0;
	var vaADroite = true;
	var vaEnBas = true;
	var wait1 = 0;
	var wait2 = 0;
	var compteur = 1;
	var quelEvent = -1;
	var gameOver = false;
	var win = false;
	var end = false;
	var wait3 = 0;
	var jump = new Audio('Jeu/Sounds/jump.wav');
	var gameLoop = new Audio('Jeu/Sounds/loop.wav');
	var Sucess = new Audio('Jeu/Sounds/Sucess.wav');
	var GO = new Audio('Jeu/Sounds/GameOver.wav');
	var Piece = new Audio('Jeu/Sounds/Piece.wav');
	fond.src = 'Jeu/Images/Fond Violet.png';
	perso.src = 'Jeu/Images/Skin Avner.png';
	gagne.src = 'Jeu/Images/win.png';
	perdu.src = 'Jeu/Images/Game Over.png';
	var obstacle01 = new Obstacle(0, 600, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle02 = new Obstacle(200, 600, 50, 100, 'Jeu/Images/PF-70-140.png');
	var obstacle03 = new Obstacle(400, 600, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle04 = new Obstacle(600, 600, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle21 = new Obstacle(500, 300, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle22 = new Obstacle(100, 350, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle23 = new Obstacle(-100, 350, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle24 = new Obstacle(950, 350, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle32 = new Obstacle(850, 200, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle33 = new Obstacle(-150, 200, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle41 = new Obstacle(-100, 50, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle42 = new Obstacle(950, 50, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle43 = new Obstacle(500, 50, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacle002 = new Obstacle(0, 400, 200, 300, 'Jeu/Images/StoneWall-280-420.png');
	var obstacle004 = new Obstacle(950, 400, 50, 50, 'Jeu/Images/StoneWall-70-70.png');
	var obstacle005 = new Obstacle(950, 500, 100, 50, 'Jeu/Images/StoneWall-140-70.png');
	var obstacle006 = new Obstacle(950, 600, 50, 50, 'Jeu/Images/StoneWall-70-70.png');
	var obstacleM1 = new Obstacle(800, 450, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacleM2 = new Obstacle(350, 150, 50, 50, 'Jeu/Images/castle.png');
	var obstacleD1 = new Obstacle(200, 650, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacleD2 = new Obstacle(800, 650, 50, 200, 'Jeu/Images/PF-70-210.png');
	var obstacleE3 = new Obstacle(50, 400, 200, 200, 'Jeu/Images/Andy.png');
	var obstacleE4 = new Obstacle(50, 400, 200, 200, 'Jeu/Images/Aziat.png');
	var obstacleE5 = new Obstacle(50, 400, 200, 200, 'Jeu/Images/RireJaune.png');
	var obstacleE6 = new Obstacle(50, 400, 200, 200, 'Jeu/Images/Jerem.png');
	var obstacleE7 = new Obstacle(50, 400, 200, 200, 'Jeu/Images/Pat.png');
	var obstacleE01 = new Obstacle(575, 250, 50, 50, 'Jeu/Images/Rouge.png');
	var obstacleE02 = new Obstacle(100, 300, 50, 50, 'Jeu/Images/Reflex.png');
	var obstacleE03 = new Obstacle(900, 150, 50, 50, 'Jeu/Images/Sushi1.png');
	var obstacleE04 = new Obstacle(575, 0, 50, 50, 'Jeu/Images/Casque.png');
	var obstacleE05 = new Obstacle(50, 0, 50, 50, 'Jeu/Images/KFC.png');
	var obstacles = new Array(obstacle01, obstacle02, obstacle03, obstacle04, obstacle006, obstacle21, obstacle22, obstacle23, obstacle24, obstacle32, obstacle33, obstacle41, obstacle42, obstacle43, obstacle002, obstacle004, obstacle005, obstacleD1, obstacleD2, obstacleM1, obstacleM2);
	var events = new Array();
	var foreGround = new Array();
	function collision(direction) {
		var proximite = false;
		switch (direction) {
		case "gauche":
			xx = -vitesse;
			yy = 0;
			break;
		case "droite":
			xx = vitesse;
			yy = 0;
			break;
		case "haut":
			xx = 0;
			yy = -25;
			break;
		case "bas":
			xx = 0;
			yy = 25;
			break;
		default:
			xx = 0;
			yy = 0;
			break;
		}
		for (i in obstacles) {
			if (obstacles[i].collision(x + xx, y + yy, sprite_l, sprite_h)) {
				proximite = true;
				quelObstacle = i;
				break;
			}
		}
		return proximite;
	}

	function collisionEvent() {
		for (i in events) {
			if (events[i].collision(x, y, sprite_l, sprite_h)) {
				proximite = true;
				quelEvent = i;
				events.splice(i, 1);
				break;
			}
		}
	}
	perso.onload = function() {
		setInterval(update, FPS);
	};
	function update() {
		var d = new Date();
		if (((quelObstacle == obstacles.length - 3) || (quelObstacle == obstacles.length - 4)) && gameOver == false) {
			console.log("T'es mort !");
			gameOver = true;
		}
		if (quelEvent == 0) {
			compteur++;
			quelEvent = -1;
			Piece.play();
		}
		switch (compteur) {
		case 1:
			foreGround.push(obstacleE3);
			events.push(obstacleE01);
			break;
		case 2:
			foreGround.push(obstacleE4);
			events.push(obstacleE02);
			break;
		case 3:
			foreGround.push(obstacleE5);
			events.push(obstacleE03);
			break;
		case 4:
			foreGround.push(obstacleE6);
			events.push(obstacleE04);
			break;
		case 5:
			foreGround.push(obstacleE7);
			events.push(obstacleE05);
			break;
		case 6:
			console.log("T'as gagné!");
			compteur = -1;
			win = true;
		}
		$('#canvas').click(function(evt) {
			x1 = evt.offsetX;
			y1 = evt.offsetY;
		});
		if (!clavier.droite && clavier.gauche && gameOver == false && win == false) {
			collisionEvent();
			if (!collision("gauche")) x -= vitesse;
			if (x < sprite_l / 2) {
				x = CANVAS.width - sprite_l;
			};
			flip = true;
		} else if (clavier.droite && !clavier.gauche && gameOver == false && win == false) {
			collisionEvent();
			if (!collision("droite")) x += vitesse;
			if (x > (CANVAS.width - sprite_l / 2)) {
				x = 0 + sprite_l;
			};
			flip = false;
		}
		if (keys[32] && !collision("haut") && (Math.abs(d.getSeconds() - timeTemps)) > 0.5 && gameOver == false && win == false) {
			if (!jumping) {
				jumping = true;
				velY = -vitesse * 5;
				jump.play();
				timeTemps = d.getSeconds();
			}
		}
		if (jumping || !collision("bas")) {
			collisionEvent();
			velY += gravity;
			y += velY;
		}
		if (collision("haut") || y < 0) {
			collisionEvent();
			velY *= -1;
		}
		if (collision("bas")) {
			collisionEvent();
			y = obstacles[quelObstacle]["y"] - 0.5;
			jumping = false;
		}
		if ((Math.abs(d.getSeconds() - wait1)) >= 2) {
			if (vaADroite == true) {
				if (obstacles[obstacles.length - 2].x < 950) {
					obstacles[obstacles.length - 2].x += 2;
				}
				if (obstacles[obstacles.length - 2].x >= 950) {
					vaADroite = false;
					wait1 = new Date().getSeconds();
				}
			} else {
				if (obstacles[obstacles.length - 2].x > 800) {
					obstacles[obstacles.length - 2].x -= 2;
				}
				if (obstacles[obstacles.length - 2].x <= 800) {
					vaADroite = true;
					wait1 = new Date().getSeconds();
				}
			}
		}
		if ((Math.abs(d.getSeconds() - wait2)) >= 1.25) {
			if (vaEnBas == true) {
				if (obstacles[obstacles.length - 1].x < 350 && !collision("gauche")) {
					obstacles[obstacles.length - 1].x += 2;
				}
				if (obstacles[obstacles.length - 1].x >= 350) {
					vaEnBas = false;
					wait2 = new Date().getSeconds();
				}
			} else {
				if (obstacles[obstacles.length - 1].x > 250 && !collision("droite")) {
					obstacles[obstacles.length - 1].x -= 2;
				}
				if (obstacles[obstacles.length - 1].x <= 250) {
					vaEnBas = true;
					wait2 = new Date().getSeconds();
				}
			}
		}
		frame_num++;
		if (frame_num == frames) {
			frame_num = 0;
		};
		if (clavier.droite && !clavier.gauche && gameOver == false && win == false) {
			orientation = 1;
			flip = false;
		} else if (!clavier.droite && clavier.gauche && gameOver == false && win == false) {
			orientation = 1;
			flip = true;
		} else {
			frame_num = 0;
			orientation = 0;
		};
		CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
		CTX.save();
		CTX.drawImage(fond, 0, 0, CANVAS.width, CANVAS.height)
		for (i in obstacles) {
			obstacles[i].drawObstacle();
		}
		for (i in events) {
			events[i].drawObstacle();
		}
		CTX.translate(x, y);
		if (flip) {
			CTX.scale(-1, 1);
		};
		CTX.drawImage(perso, frame_num * sprite_l, orientation * sprite_h, sprite_l, sprite_h, sprite_l / 2 * -1, sprite_h * -1, sprite_l, sprite_h);
		CTX.restore();
		for (i in foreGround) {
			foreGround[i].drawObstacle();
		}
		events.pop();
		foreGround.pop();
		if (win && !end) {
			Sucess.play();
			gameLoop.pause();
			wait3 = new Date().getSeconds();
			end = true;
		}
		if (gameOver && !end) {
			GO.play();
			gameLoop.pause();
			wait3 = new Date().getSeconds();
			end = true;
		}
		if (end && gameOver) CTX.drawImage(perdu, 0, 0, 1000, 650);
		if (end && win) CTX.drawImage(gagne, 0, 0, 1000, 650);
		if ((Math.abs(d.getSeconds() - wait3)) >= 6) {
			Sucess.pause();
			GO.pause();
		}
	};
	gameLoop.loop = true;
	gameLoop.play();
	document.body.addEventListener("keydown", function(e) {
		keys[e.keyCode] = true;
	});
	document.body.addEventListener("keyup", function(e) {
		keys[e.keyCode] = false;
	});
});