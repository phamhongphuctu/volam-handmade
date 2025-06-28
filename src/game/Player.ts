import { Sprite, Texture } from "pixi.js";

export class Player {
  sprite: Sprite;

  constructor() {
    const texture = Texture.from("https://i.imgur.com/bH54A6k.png");
    this.sprite = new Sprite(texture);

    this.sprite.width = 96;
    this.sprite.height = 96;
    this.sprite.anchor.set(0.5);
    this.sprite.x = 384;
    this.sprite.y = 384;
  }

  get view() {
    return this.sprite;
  }

  move(dx: number, dy: number) {
    this.sprite.x += dx;
    this.sprite.y += dy;
  }
}
