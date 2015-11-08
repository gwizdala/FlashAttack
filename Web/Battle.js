// Create the canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
var div = document.getElementById("battleScreenAnimation");
canvas.width = div.clientWidth;
canvas.height = div.clientHeight;

// Scaling factor
var scaleFactor = 1;

// Player image
var playerReady = false;
var playerImage = new Image();
playerImage.onload = function () {
	playerReady = true;
};
playerImage.src = "images/player.png";

// Heart image (lives)
var heartReady = false;
var heartImage = new Image();
heartImage.onload = function () {
	heartReady = true;
};
heartImage.src = "images/heart.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Game objects
var player = {};
var heart = {};
var monster = {};

// refresh the game on player input
// This will move the players to correct locations
// based on resizing of display
var refresh = function () {
	canvas.width = div.clientWidth;
	canvas.height = div.clientHeight;

	checkScaling();

	player.x = 50*scaleFactor;
	player.y = canvas.height - 320*scaleFactor;

	monster.x = canvas.width - (370*scaleFactor);
	monster.y = canvas.height - 320*scaleFactor;
};

// Check for scaling parameters
var checkScaling = function() {
	var heightScale = 1;
	var widthScale = 1;
	if(canvas.width < 1000) {
		widthScale = (canvas.width / 1000);
	}
	if(canvas.height < 400) {
		heightScale = (canvas.height / 400);
	}

	if(widthScale < heightScale)
	{
		scaleFactor = widthScale;
	}
	else {
		scaleFactor = heightScale;
	}
}

// Update game objects
var update = function (modifier) {

/*	if( Attack Scenario) {

}

	if ( refresh scenario ) {
		refresh();
	}*/
		refresh();
};

// Draw everything
var render = function () {

	//Variables to be sent by the view
	var numPlayerLives = 3;
	var numPlayerLivesLeft = 3;
	var numMonsterLives = 50;
	var numMonsterLivesLeft = 30;

	// Player paint
	if (playerReady) {
		ctx.drawImage(playerImage, player.x, player.y, playerImage.width*scaleFactor, playerImage.height*scaleFactor);
	}

	// Monster Paint
	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y, monsterImage.width*scaleFactor, monsterImage.height*scaleFactor);

		// Total Monster Lives
		// Rectangle is 500x56
		ctx.beginPath();
		ctx.strokeStyle = "white";
		ctx.rect((canvas.width - (505*scaleFactor)), 5*scaleFactor, 500*scaleFactor, 56*scaleFactor);
		ctx.lineWidth="3";
		ctx.stroke();
		// Monster Lives Left
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.rect((canvas.width - (505*scaleFactor)), 5*scaleFactor, 500*(numMonsterLivesLeft/numMonsterLives)*scaleFactor, 56*scaleFactor);
		ctx.fill();
		ctx.stroke();
	}

	// Player Lives Left
  if (heartReady) {
		// Heart is 64x56
		heart.y = 5;
		for(var i = 0; i < numPlayerLivesLeft; i++) {
					heart.x = (i*heartImage.width + 5)*scaleFactor;
			    ctx.drawImage(heartImage, heart.x, heart.y, heartImage.width*scaleFactor, heartImage.height*scaleFactor);
		}
  }

};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Game Init
var then = Date.now();
refresh();
main();
