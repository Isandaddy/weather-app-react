import { Weather } from "../types/types";

type RainDrops = {
  x: number, y: number, speed: number, length: number
}

export class Rain implements Weather {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;;
  private drops: RainDrops[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  generateWeather() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.drops.push({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      speed: Math.random() * 5 + 5,
      length: Math.random() * 10 + 10
    });

    this.loop();
  }

  private loop() {
    const ctx = this.ctx as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.drops.length/3; i++) {
      const drop = this.drops[i];
      if(!ctx) return;
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      ctx.strokeStyle = "#5555";
      ctx.lineWidth = 2;
      ctx.stroke();

      drop.y += drop.speed;

      if (drop.y - drop.length > this.canvas.height) {
        drop.y = -drop.length;
      }
    }

  }

}