# WASH MY DOG


## DESCRIPTION

Wash my dog (patent pending) is a game where you have to avoid bathtubs and sponges to get the highest score possible. To do so you jump using the space bar. The player starts with 3 lives and can get extra lives if he/she collisions with a puppy. The game ends when you lose all your lives, and the player gets a final score equal to all the obstacles avoided.

## MAIN FUNCIONALITIES

* The player jumps using the space bar
* The player is situated on the left side of the screen
* Obstacles appear in the right side of the screen and move at a continuous speed towards the left of the screen
* The score and the lives counter update live whenever the player loses a live or gets a point
* The player gets a point every time an obstacle leaves the screen trough the left side
* The player loses a live everytime a collision with an obstacle occurs
* The player can turn the music of the game on and off using a button below the score

## MVP

* The game has three screens, a Start Screen that loads every time the game is launched, a Game Screen where the player plays the game, and an End Screen that loads whenever the game is over
* The Start Screen has a button to start the game, and the End Screen has a button to reload the game
* The game records interaction between the player and the obstacles
* The player moves trough the screen using DOM manipulation

## BACKLOG FUNCTIONALITIES

* Adding different levels with different obstacles as the score grows
* Increasing the speed of the obstacles as the levels advance
* Awarding extra points to the player every time a level is completed

## TECHNOLOGIES USED

* JavaScript
* CSS
* HTML
* DOM Manipulation

## STATES

* Start Screen
* Game Screen
* End Screen

## PROJECT STRUCTURE

### game.js

* this.startScreen;
* this.gameScreen;
* this.gameScreen1;
* this.endScreen;
* this.height;
* this.width;
* this.height1;
* this.width1;
* this.player;
* this.obstacles;
* this.extraLives;
* this.isGameOver;
* this.score;
* this.lives;
* this.animateId;
* this.audio;

* start();
* gameLoop();
* update();
* endGame();
* playAudio();
* stopAudio();

### script.js

* startGame();
* musicButton;
* startButton;
* restartButton;

### player.js

Player
* this.gameScreen;
* this.height;
* this.width;
* this.top;
* this.left;
* this.directionX;
* this.directionY;
* this.element;

* move();
* updatePosition();
* didCollide();
* didCollide();
* didExit();

### obstacle.js

Obstacles 1, 2 & 3
* this.left;
* this.top;
* this.width;
* this.height;

* move();
* updatePosition();

## DEPLOY

https://alcarja.github.io/IronHack-Game/


