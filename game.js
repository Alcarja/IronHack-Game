class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen1 = document.getElementById("game-screen");
        this.gameScreen = document.getElementById("game-container"); //With this we can reference our screens when we need it
        this.endScreen = document.getElementById("game-end");
        this.height = 100;
        this.width = 100;
        this.height1 = 600;
        this.width1 = 800;
        //With gameScreen we control the whole cointainer, with gameScreen1 we control the screen for the game
        //With this.height1 and this.width1 we control the height and the width of the gameScreen
        this.player = new Player(this.gameScreen1);
        this.obstacles = [];
        this.isGameOver = false;
        this.score = 0;
        this.lives = 3;
        this.animateId;
    }

    start() {
        this.gameScreen.style.height = `${this.height}vh`;
        this.gameScreen.style.width = `${this.width}vw`;

        this.gameScreen1.style.height = `${this.height1}px`;
        this.gameScreen1.style.width = `${this.width1}px`;
        this.gameScreen1.style.display = 'flex';

        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'flex';

        this.gameLoop()

        //When we call the method start we set the gameScreen height and width and we show the Game Screen that we want and hide the Start Screen. We also call the gameLoop() fucntion to start the game
    }

    gameLoop() {
        this.update(); //Every time the gameLoop runs we are going to do a number of things that are stored into the update method

        if(this.animateId % 200 === 0) { //Every 200 frames we are going to do something
            this.obstacles.push(new Obstacle(this.gameScreen)); 
        }

        if(this.isGameOver) {
            this.endGame()            
        } else {
            this.animateId = requestAnimationFrame(() => this.gameLoop()) //Every time the screen creates a new frame is going to call the gameLoop
        }
    }

    update() {
        this.player.move(); //The first thing we do is update the position of our player
        
        const obstaclesToKeep = [];
        let screenScore = document.getElementById('score');
        let screenLives = document.getElementById('lives');
        
        this.obstacles.forEach(obstacle => {
            obstacle.move();
            if(this.player.didCollide(obstacle)) { //If we collide with an obstacle we remove that obstacle from the obstacles array and we lose a life
                obstacle.element.remove()
                this.lives -= 1;
                screenLives.innerHTML = this.lives
            } else if(obstacle.left - this.width <= 0) { //This checks if the obstacle is out of the screen and if the obstacle leaves the screen we get 1 point
                this.score += 1;
                screenScore.innerHTML = this.score
                obstacle.element.remove()
            } else {
                obstaclesToKeep.push(obstacle);
            } 
        })
        
        this.obstacles = obstaclesToKeep;

        if(this.lives <= 0) {
            this.isGameOver = true;
        }
    }

    endGame() {
        this.gameScreen.style.display = 'none';
        this.endScreen.style.display = 'flex';
        //When we call the endGame we hide the gameScreen and we show the endScreen
        this.player.element.remove() //When the game ends we remove the player and we remove the obstacles
        this.obstacles.forEach(obstacle => obstacle.element.remove())
    
    }
}