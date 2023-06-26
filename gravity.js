
let gravity = 0.5;
let bird_dy = 0;


function apply_gravity() {
    
    bird_dy = bird_dy + gravity;
    document.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp' || e.key == ' ') {
        bird_dy = -7.6;
      }
    })};


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
             /* "ArrowLeft", */
              "ArrowUp",
            //   "ArrowRight",
            //   "ArrowDown",
            ];
      
            if(possibleKeyStrokes.includes(key)) {
              event.preventDefault();
              switch (key) {
                case 'ArrowUp':
                  game.player.directionY = -20
                  setTimeout(() => {
                    game.player.directionY = 20;
                }, 600)
                  break
                 /* case 'ArrowLeft':
                  game.player.directionX = -1
                  break
                case 'ArrowRight':
                  game.player.directionX = 1
                  break
                case 'ArrowDown':
                  game.player.directionY = 1
                  break */
              } 
            }
          })
          
          document.addEventListener('keyup', event => {
            const key = event.key
            const possibleKeystrokes = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']
      
            if (possibleKeystrokes.includes(key)) {
              // Update player's directionX and directionY based on the key pressed
              switch (key) {
                case 'ArrowUp':
                    game.player.directionY = 0;
                  break
              }
            }
          })
    }





startButton.addEventListener("click", function() {
    startGame();
    //When we click the start button we are going to run the startGame function
});

restartButton.addEventListener('click', function() {
    location.reload();
    //When we click the restart button we are going to reload the whole page so the game starts again
})



























})