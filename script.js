window.addEventListener('load', () => {
    const startButton = document.querySelector(".start-screen-button");
    const restartButton = document.getElementById("restart-button");
    let game;

    function startGame() {
        console.log('Start Game');
        game = new Game();
        game.start();

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