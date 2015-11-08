// Create the canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
var div = document.getElementById("battleScreenAnimation");
canvas.width = div.clientWidth;
canvas.height = div.clientHeight;

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

/*	if( Attack Scenario) {

}

	if ( Reset scenario ) {
		reset();
	}*/
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
		ctx.drawImage(playerImage, player.x, player.y);
	}

	// Monster Paint
	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);

		// Total Monster Lives
		// Rectangle is 500x56
		ctx.beginPath();
		ctx.strokeStyle = "white";
		ctx.rect((canvas.width - 505), 5, 500, 56);
		ctx.lineWidth="3";
		ctx.stroke();
		// Monster Lives Left
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.rect((canvas.width - 505), 5, 500*(numMonsterLivesLeft/numMonsterLives), 56);
		ctx.fill();
		ctx.stroke();
	}

	// Player Lives Left
  if (heartReady) {
		// Heart is 64x56
		heart.y = 5;
		for(var i = 0; i < numPlayerLivesLeft; i++) {
					heart.x = i*67 + 5;
			    ctx.drawImage(heartImage, heart.x, heart.y);
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
reset();
main();
