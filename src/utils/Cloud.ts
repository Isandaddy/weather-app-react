import { Weather } from "../types/types";

export class Cloud implements Weather {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  private draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    const cloudColor = "#5555";
    const cloudRadius = 50;
    if(!ctx) return;
    ctx.beginPath();
    ctx.arc(x, y, cloudRadius, 0, 2 * Math.PI);
    ctx.arc(x + cloudRadius, y, cloudRadius, 0, 2 * Math.PI);
    ctx.arc(x + cloudRadius * 2, y, cloudRadius, 0, 2 * Math.PI);
    ctx.arc(x + cloudRadius * 3, y, cloudRadius, 0, 2 * Math.PI);
    ctx.arc(x + cloudRadius * 2, y - cloudRadius, cloudRadius, 0, 2 * Math.PI);
    ctx.arc(x + cloudRadius, y - cloudRadius, cloudRadius, 0, 2 * Math.PI);
    ctx.arc(x + cloudRadius * 3, y - cloudRadius, cloudRadius, 0, 2 * Math.PI);
    ctx.arc(x + cloudRadius * 2, y - cloudRadius * 2, cloudRadius, 0, 2 * Math.PI);
    ctx.fillStyle = cloudColor;
    ctx.fill();
  }

  generateWeather() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    const ctx = this.ctx as CanvasRenderingContext2D;

    for (let i = 0; i < 10; i++) {
      const cloudOffset = 10;
      const x = Math.random() * this.canvas.width + cloudOffset;
      const y = Math.random() * this.canvas.height / 4 + cloudOffset;
      this.draw(ctx, x, y);
    }
  }
}