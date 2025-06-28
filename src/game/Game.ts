import { Application } from "pixi.js";
import { Map } from "./Map";
import { Player } from "./Player";

export function createGame(container: HTMLDivElement) {
  const app = new Application({
    width: 768,
    height: 768,
    backgroundColor: 0x000000,
  });

  // Gắn canvas vào div
  container.innerHTML = "";
  container.appendChild(app.view as HTMLCanvasElement);

  const map = new Map();
  const player = new Player();

  app.stage.addChild(map.view);
  app.stage.addChild(player.view);

  // Bắt phím để điều khiển
  window.addEventListener("keydown", (e) => {
    const speed = 5;
    if (e.key === "ArrowUp" || e.key === "w") player.move(0, -speed);
    if (e.key === "ArrowDown" || e.key === "s") player.move(0, speed);
    if (e.key === "ArrowLeft" || e.key === "a") player.move(-speed, 0);
    if (e.key === "ArrowRight" || e.key === "d") player.move(speed, 0);
  });

  return app;
}
