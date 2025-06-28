import { Application } from "pixi.js";

export function createGame(container: HTMLDivElement) {
  const app = new Application({
    width: 768,
    height: 768,
    backgroundColor: 0x000000,
  });

  container.innerHTML = "";
  container.appendChild(app.view as HTMLCanvasElement);

  return app;
}
