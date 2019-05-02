import { detectCollision } from "/src/collsionDetection";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;

    this.size = 16;
    this.reset();
  }

  reset() {
    this.position = { x: 10, y: 400 }; // ball starting position x,y
    this.speed = { x: 4, y: -2 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    ); // image, x position, y position, image with , image height we can change initial position of ball here
  }

  update(deltaTime) {
    //console.log(this.game.paddle.position.x);
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // ball bounce limit to game width and hetght
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // wall on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // bottom of the game , if we hit bottom of the game game over or reduce lives
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset(); //when we loose a life ball will rese
    }

    if (detectCollision(this, this.game.paddle)) {
      // inside bracket 1st parameter 'this' means ball 54:41
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  } // end of update function
} //end Ball class
