// Create the canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
var div = document.getElementById("battleScreenAnimation")
canvas.width = div.clientWidth;
canvas.height = div.clientHeight;

// Background image
/*var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";*/

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

// Reset the game on player input
var reset = function () {
	player.x = 50;
	player.y = canvas.height - 320;

  monster.x = canvas.width - 370;
  monster.y = canvas.height - 320;
};

// Update game objects
var update = function (modifier) {

/*	if ( Reset scenario ) {
		++monstersCaught;
		reset();
	}*/
};

// Draw everything
var render = function () {

	if (playerReady) {
		ctx.drawImage(playerImage, player.x, player.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Player Lives Left
  if (heartReady) {
    ctx.drawImage(heartImage, heart.x, heart.y);
  }
  // Monster Lives Left
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
reset();
main();
