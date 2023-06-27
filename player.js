class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen; //We pass a gameScreen into the constructor, which will be the variable gameScreen from the game.js (that is linked to our gameScreen in the HTML)
        this.isGoingUp = false;

        this.height = 50;
        this.width = 50;
        this.top = 200;
        this.left = 20;
        //Player's attributes

        this.directionX = 0;
        this.directionY = 0;
        //Player's movements

        this.element = document.createElement('img');
        this.element.src = '/Resources/Images/Nala1.png';
        this.element.style.position = 'absolute';
        this.gameScreen.appendChild(this.element);
        //We create an element that's going to be an image, we set its source and we position it 'absolute' so we can move it using 'top' and 'left' properties. We append it to the startScreen, which is where we want to see it

        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        //We set the elements width and height

        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        //We set the element's top and left positions
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;
        //The starting point of our element is set with the top and left position. We add our directionX and directionY to understand in which axes we are moving, and we use our variables directionX and directionY to add something to our left and top positions so we can move the object trough the screen

        if (this.left < 10) {
            this.left = 10
          }
        if (this.top < 10) {
            this.top = 10
          }
          
          // handles right hand side
          if (this.left > this.gameScreen.offsetWidth - this.width - 50) {
            this.left = this.gameScreen.offsetWidth - this.width - 50
          }
      
          // handles bottom side
          if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10
          } //Makes the car not leave the screen

          this.updatePosition(); 
          //We call this eveytime we move to update the screen so the player effectively moves
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
    //After we move, we call the element properties again to update them. We changed them with the move() method, and after changing them we have to update the values so they reflect the movement that happened in the move() method

    didCollide(obstacle) { //This handles the collisions between cars and obstacles. The didCollide method expects to receive an obstacle
        const playerRect = this.element.getBoundingClientRect() //This gives the position of your player
        const obstacleRect = obstacle.element.getBoundingClientRect() //This gives the position of the obstacle
    //When you have the positions of both your player and the obstacle you check for an overlap. If there is overlap you return true. If there is not an overlap you return false
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true
        } else {
          return false
        }
      }

      didExit() {
        const playerRect = this.element.getBoundingClientRect()
        if(playerRect.bottom ) {
          this.lives -= 1;
          this.lives.innerHTML = this.lives;
        }
      }

      didExit(obstacle) {
        const obstacleRect = obstacle.element.getBoundingClientRect();
        if(obstacleRect > this.gameScreen.offsetWidth) {
            return true
        } else {
            return false
        }
    }
}