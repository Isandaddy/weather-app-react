import { Weather } from "../types/types";

export class Clear implements Weather {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  private drawSun(ctx: CanvasRenderingContext2D, x: number, y: number) {
    const sunColor = '#FFFF00'; // color of the sun
    const sunRadius = 50; // radius of each cloud puff
    // const cloudSpacing = 30; // spacing between cloud puffs
    
    ctx.beginPath();
    ctx.arc(x, y, sunRadius, 0, 2 * Math.PI);
    ctx.fillStyle = sunColor;
    ctx.fill();
  }

  generateWeather() {
    const ctx = this.ctx as CanvasRenderingContext2D;
    const sunOffset = 10;
    const x = Math.random() * this.canvas.width / 2 + sunOffset;
    const y = Math.random() * this.canvas.height / 2 + sunOffset;
    this.drawSun(ctx, x, y);
  }
}