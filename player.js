class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen; //We pass a gameScreen into the constructor, which will be the variable gameScreen from the game.js (that is linked to our gameScreen in the HTML)

        this.height = 150;
        this.width = 80;
        this.top = 480;
        this.left = 180;
        //Player's attributes

        this.directionX = 0;
        this.directionY = 0;
        //Player's movements

        this.element = document.createElement('img');
        this.element.src = './Resources/Images/Nala1.png';
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
}