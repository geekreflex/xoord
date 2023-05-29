/// <reference types="vite/client" />

declare global {
  declare module 'fabric/fabric-impl' {
    interface Canvas {
      contextTop: CanvasRenderingContext2D;
      undo: (callback?: () => void) => void;
      redo: (callback?: () => void) => void;
      clearHistory: () => void;
    }
    interface IObjectOptions {
      id?: string | undefined;
    }
  }
}
