import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
//alert('hiiiiiiii');
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timeStamp) {
  // game loop will run every frame

  let deltaTime = timeStamp - lastTime; // calculate how much time past
  lastTime = timeStamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop); // call gameLoop again with the next frames' time stamp
} //end of game loop

requestAnimationFrame(gameLoop);

// end index.js
