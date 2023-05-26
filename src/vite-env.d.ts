/// <reference types="vite/client" />

declare global {
  declare module 'fabric/fabric-impl' {
    interface Canvas {
      contextTop: CanvasRenderingContext2D;
    }
    interface IObjectOptions {
      id?: string | undefined;
    }
  }
}
