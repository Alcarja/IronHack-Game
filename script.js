window.addEventListener('load', () => {
    const startButton = document.querySelector(".start-screen-button");
    const restartButton = document.getElementById("restart-button");
    let musicButton = document.querySelector(".audioButton");
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
                    game.player.directionY -= 15;
                    isGoingUp = true; //When I press the space bar we set isGoingUp to true
                    setTimeout(() => {
                        game.player.isGoingUp = false; //After 100 miliseconds we turn it back to false
                    }, 100)
                    
                   /* if(game.player.isGoingUp = false) {

                    } */
                    
                }
            }
      
          }) //EventListener
          
          document.addEventListener('keyup', event => {
            const key = event.key
            const possibleKeystrokes = [' ']

            if(possibleKeystrokes.includes(key)) {
               
                if(key === ' ') {
                    game.player.directionY = 1;
                }
                setTimeout(() => {
                    game.player.directionY += (4);
               }, 100) 
            }
      
          }) //EventListener */
    } //Function StartGame



 musicButton.addEventListener("click", function() {
    if(musicButton.classList.contains('mute')) {
        game.stopAudio();
        musicButton.classList.replace('mute', 'unMute')
        console.log(musicButton.classList)

    }
    else {
        game.playAudio();
        musicButton.classList.replace('unMute', 'mute')
        console.log(musicButton.classList)

    }

}) 
//Make the music button work


startButton.addEventListener("click", function() {
    startGame();

    //When we click the start button we are going to run the startGame function
});

restartButton.addEventListener('click', function() {
    location.reload();
    //When we click the restart button we are going to reload the whole page so the game starts again
})
})