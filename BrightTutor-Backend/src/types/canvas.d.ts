declare module 'canvas' {
  export function createCanvas(width: number, height: number): Canvas
  export function registerFont(path: string, options: { family: string; weight?: string; style?: string }): void
  export const Image: unknown
  export const loadImage: (src: string) => Promise<unknown>
  export interface Canvas {
    getContext(type: '2d'): CanvasRenderingContext2D
    width: number
    height: number
    toBuffer(mimeType?: string): Buffer
  }
  export interface CanvasRenderingContext2D {
    font: string
    fillStyle: string
    strokeStyle: string
    textAlign: string
    textBaseline: string
    lineWidth: number
    fillText(text: string, x: number, y: number): void
    fillRect(x: number, y: number, w: number, h: number): void
    drawImage(image: unknown, dx: number, dy: number, dWidth?: number, dHeight?: number): void
    beginPath(): void
    moveTo(x: number, y: number): void
    lineTo(x: number, y: number): void
    stroke(): void
    save(): void
    restore(): void
    translate(x: number, y: number): void
    rotate(angle: number): void
  }
}
