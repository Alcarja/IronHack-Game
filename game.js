class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen"); //With this we can reference our screens when we need it
        this.endScreen = document.getElementById("game-end");
        this.height = 400;
        this.width = 800;
        this.player = null;
        this.obstacles = [];
        this.isGameOver = false;
        this.score = 0;
        this.lives = 3;
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.display = 'none';
        this.gameScreen.display = 'block';

        this.gameLoop()

        //When we call the method start we set the gameScreen height and width and we show the Game Screen that we want and hide the Start Screen. We also call the gameLoop() fucntion to start the game
    }

    gameLoop() {
        this.update(); 
    }

    update() {

    }

    endGame() {
        this.gameScreen.style.display = 'none';
        this.endScreen.style.display = 'block';
        //When we call the endGame we hide the gameScreen and we show the endScreen
    }
}