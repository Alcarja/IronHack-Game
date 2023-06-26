class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-container"); //With this we can reference our screens when we need it
        this.endScreen = document.getElementById("game-end");
        this.height = 800;
        this.width = 800;
        this.player = new Player(this.startScreen);
        this.obstacles = [];
        this.isGameOver = false;
        this.score = 0;
        this.lives = 3;
        this.animateId;
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'flex';

        this.gameLoop()

        //When we call the method start we set the gameScreen height and width and we show the Game Screen that we want and hide the Start Screen. We also call the gameLoop() fucntion to start the game
    }

    gameLoop() {
        this.update(); //Every time the gameLoop runs we are going to do a number of things that are stored into the update method

        if(this.animateId % 200 === 0) { //Every 200 frames we are going to do something

        }
    }

    update() {
        this.player.move(); //The first thing we do is update the position of our player
        
        const obstaclesToKeep = [];

    }

    endGame() {
        this.gameScreen.style.display = 'none';
        this.endScreen.style.display = 'flex';
        //When we call the endGame we hide the gameScreen and we show the endScreen
    }
}