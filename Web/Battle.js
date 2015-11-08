var Battle = function() {
var b = this;
// Timing
b.then = Date.now();

// Create the canvas
b.canvas = document.querySelector('canvas');
b.ctx = b.canvas.getContext("2d");
b.div = document.getElementById("battleScreenAnimation");
b.canvas.width = b.div.clientWidth;
b.canvas.height = b.div.clientHeight;

//Variables to be sent by the view
b.numPlayerLives;
b.numPlayerLivesLeft;
b.numMonsterLives;
b.numMonsterLivesLeft;

// Scaling factor
b.scaleFactor = 1;

// Player image
b.playerReady = false;
b.playerImage = new Image();
b.playerImage.onload = function () {
	b.playerReady = true;
};
b.playerImage.src = "images/player.png";

// Heart image (lives)
b.heartReady = false;
b.heartImage = new Image();
b.heartImage.onload = function () {
	b.heartReady = true;
};
b.heartImage.src = "images/heart.png";

// Monster image
b.monsterReady = false;
b.monsterImage = new Image();
b.monsterImage.onload = function () {
	b.monsterReady = true;
};
b.monsterImage.src = "images/monster.png";

// Game objects
b.player = {};
b.heart = {};
b.monster = {};

}

// refresh the game on player input
// This will move the players to correct locations
// based on resizing of display
Battle.prototype.refresh = function () {
	this.canvas.width = this.div.clientWidth;
	this.canvas.height = this.div.clientHeight;

	this.checkScaling();

	this.player.x = 50*this.scaleFactor;
	this.player.y = this.canvas.height - 320*this.scaleFactor;

	this.monster.x = this.canvas.width - (370*this.scaleFactor);
	this.monster.y = this.canvas.height - 320*this.scaleFactor;
};

// Check for scaling parameters
Battle.prototype.checkScaling = function() {
	var heightScale = 1;
	var widthScale = 1;
	if(this.canvas.width < 1000) {
		widthScale = (this.canvas.width / 1000);
	}
	if(this.canvas.height < 400) {
		heightScale = (this.canvas.height / 400);
	}

	if(widthScale < heightScale)
	{
		this.scaleFactor = widthScale;
	}
	else {
		this.scaleFactor = heightScale;
	}
}

// Update game objects
Battle.prototype.update = function (isCorrect, newPlayerLives, newMonsterLives) {


	if( isCorrect ) {
			//display success logic here
	}
	else {
			//display failure logic here
	}
		this.numPlayerLivesLeft = newPlayerLives;
		this.numMonsterLivesLeft = newMonsterLives;
		this.refresh();
};

// Draw everything
Battle.prototype.render = function () {

	// Player paint
	if (this.playerReady) {
		this.ctx.drawImage(this.playerImage, this.player.x, this.player.y,
			this.playerImage.width*this.scaleFactor, this.playerImage.height*this.scaleFactor);
	}

	// Monster Paint
	if (this.monsterReady) {
		this.ctx.drawImage(this.monsterImage, this.monster.x, this.monster.y,
			this.monsterImage.width*this.scaleFactor, this.monsterImage.height*this.scaleFactor);

			// Total Monster Lives
			// Rectangle is 500x56
			this.ctx.beginPath();
			this.ctx.strokeStyle = "white";
			this.ctx.rect((this.canvas.width - (505*this.scaleFactor)), 5*this.scaleFactor, 500*this.scaleFactor, 56*this.scaleFactor);
			this.ctx.lineWidth="3";
			this.ctx.stroke();
			// Monster Lives Left
			this.ctx.beginPath();
			this.ctx.fillStyle = "red";
			this.ctx.rect((this.canvas.width - 505*(this.numMonsterLivesLeft/this.numMonsterLives)*this.scaleFactor), 5*this.scaleFactor,
										500*(this.numMonsterLivesLeft/this.numMonsterLives)*this.scaleFactor, 56*this.scaleFactor);
			this.ctx.fill();
			this.ctx.stroke();
			// Add amount of cards Left
			/*this.ctx.fillStyle = "rgb(250, 250, 250)";
			this.ctx.font = "Source Sans Pro";
			this.ctx.textAlign = "left";
			this.ctx.fillText(this.numMonsterLivesLeft + "/" this.numMonsterLives, 500*this.scaleFactor, 56*this.scaleFactor);
			this.ctx.textBaseline = "top";*/
	}

	// Player Lives Left
  if (this.heartReady) {
		// Heart is 64x56
		this.heart.y = 5;
		for(var i = 0; i < this.numPlayerLivesLeft; i++) {
					this.heart.x = (i*this.heartImage.width + 5)*this.scaleFactor;
			    this.ctx.drawImage(this.heartImage, this.heart.x, this.heart.y,
						this.heartImage.width*this.scaleFactor, this.heartImage.height*this.scaleFactor);
		}
  }

};

// The main game loop
Battle.prototype.main = function () {
	var b = this;
	var now = Date.now();
	var delta = now - this.then;

	this.render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(function(){
		b.main();
	});
};

Battle.prototype.startRender = function(originalPlayerLives, originalMonsterLives) {
	// Cross-browser support for requestAnimationFrame
	var w = window;
	requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

	// Set up initial lives
	this.numPlayerLives = originalPlayerLives;
	this.numMonsterLives = originalMonsterLives;

	this.numPlayerLivesLeft = originalPlayerLives;
	this.numMonsterLivesLeft = originalMonsterLives;

	// Game Init
	this.refresh();
	this.main();
}
