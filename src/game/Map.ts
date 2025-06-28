import { Sprite, Texture } from "pixi.js";

export class Map {
  sprite: Sprite;

  constructor() {
    const texture = Texture.from("https://i.imgur.com/Is5sx9V.png");
    this.sprite = new Sprite(texture);
    this.sprite.width = 768;
    this.sprite.height = 768;
  }

  get view() {
    return this.sprite;
  }
}
