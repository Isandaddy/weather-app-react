import { Weather } from "../types/types";

type SnowFlakes = {
  x: number, y: number, radius: number, speed: number, angle: number
}

export class Snow implements Weather{
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;;
  private width: number;
  private height: number;
  private snowflakes: SnowFlakes[]= [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
  }

  createSnowflakes(count: number) {
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * this.width;
      const y = -radius;
      const speed = Math.random() * 2 + 1;
      const angle = Math.random() * Math.PI * 2;
      this.snowflakes.push({x, y, radius, speed, angle});
    }
  }

  updateSnowflakes() {
    for (let i = 0; i < this.snowflakes.length/4; i++) {
      const snowflake = this.snowflakes[i];
      snowflake.x += Math.cos(snowflake.angle) * snowflake.speed;
      snowflake.y += Math.sin(snowflake.angle) * snowflake.speed;
      if (snowflake.y > this.height) {
        this.snowflakes.splice(i, 1);
        i--;
      }
    }
  }

  drawSnowflakes() {
    const ctx = this.ctx as CanvasRenderingContext2D;
    ctx.fillStyle = "#5555";
    for (let i = 0; i < this.snowflakes.length; i++) {
      const snowflake = this.snowflakes[i];
      if(!ctx) return;
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  generateWeather() {
    const ctx = this.ctx as CanvasRenderingContext2D;
    this.createSnowflakes(10);
    ctx.clearRect(0, 0, this.width, this.height);
    this.updateSnowflakes();
    this.drawSnowflakes();
  }
}

