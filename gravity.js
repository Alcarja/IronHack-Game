//WORKING SCRIPT.JS

    window.addEventListener('load', () => {
    const startButton = document.querySelector(".start-screen-button");
    const restartButton = document.getElementById("restart-button");
    let game;

    function startGame() {
        console.log('Start Game');
        game = new Game();
        game.start();
        document.addEventListener('keydown', (event) => {
            const key = event.key;
            const possibleKeyStrokes = [
              ' ',
            ];

            if(possibleKeyStrokes.includes(key)) {
                event.preventDefault();
                if(key === ' ') {
                    game.player.directionY = -20
                    setTimeout(() => {
                        game.player.directionY = 20;
                    }, 600)
                }
            }
      
          }) //EventListener
          
          document.addEventListener('keyup', event => {
            const key = event.key
            const possibleKeystrokes = [' ']

            if(possibleKeystrokes.includes(key)) {
                if(key === ' ') {
                    game.player.directionY = 0;
                }
            }
      
          }) //EventListener
    } //Function StartGame





startButton.addEventListener("click", function() {
    startGame();
    //When we click the start button we are going to run the startGame function
});

restartButton.addEventListener('click', function() {
    location.reload();
    //When we click the restart button we are going to reload the whole page so the game starts again
})
})



//GRAVITY
let y = 250;
let grav = 0.07;
let accel = 0.55;

y+= grav;
grav += accel;

function mousePressed() {
    grav = -11;
    
}