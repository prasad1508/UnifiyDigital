import { detectCollision } from "./collsionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.game = game;

    this.position = position;

    this.width = 80;
    this.height = 24;
    this.markForDeletion = false;
  }
  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    ); // brick image, x position, y position, image with , image height we can change initial position of ball here
  }
}
