class Obstacle {
    constructor(gameScreen1) {
        this.gameScreen1 = gameScreen1;
        this.left = 600;
        this.top = Math.floor(Math.random() * 300 + 45); //This should be the height of the bathtub so they don't appear from thin air 413
        this.width = 80;
        this.height = 45;

        this.element = document.createElement('img');
        this.element.src = './Resources/Images/Bathtub.png';
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen1.appendChild(this.element);
    }

    move() {
        this.left -= 6;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
}

class Obstacle2 {
    constructor(gameScreen1) {
        this.gameScreen1 = gameScreen1;
        this.left = 600;
        this.top = Math.floor(Math.random() * 300 + 45); //This should be the height of the bathtub so they don't appear from thin air 413
        this.width = 60;
        this.height = 45;

        this.element = document.createElement('img');
        this.element.src = './Resources/Images/Nala3.png';
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen1.appendChild(this.element);
    }

    move() {
        this.left -= 6;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
}

class Obstacle3 {
    constructor(gameScreen1) {
        this.gameScreen1 = gameScreen1;
        this.left = 600;
        this.top = Math.floor(Math.random() * 300 + 45); //This should be the height of the bathtub so they don't appear from thin air 413
        this.width = 80;
        this.height = 45;

        this.element = document.createElement('img');
        this.element.src = './Resources/Images/Sponge.png';
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen1.appendChild(this.element);
    }

    move() {
        this.left -= 9;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
}