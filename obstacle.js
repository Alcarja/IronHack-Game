class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = 800;
        this.top = 413; //This should be the height of the bathtub so they don't appear from thin air
        this.width = 80;
        this.height = 45;

        this.element = document.createElement('img');
        this.element.src = './Resources/Images/Bathtub.png';
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left -= 4;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
}