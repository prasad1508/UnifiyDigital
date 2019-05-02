import Game from "./game";

export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        // 37 is left arrow keycode
        case 37:
          paddle.moveLeft();

          break;
        // 39 is left arrow keycode
        case 39:
          paddle.moveRIght();
          break;

        case 27:
          game.togglePause();
          break;

        case 32:
          game.start();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        // 37 is left arrow keycode
        case 37:
          if (paddle.speed < 0) paddle.stop();

          break;
        // 39 is left arrow keycode
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
} //end inputhandler
