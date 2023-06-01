/// <reference types="vite/client" />

declare global {
  declare module 'fabric/fabric-impl' {
    interface Canvas {
      contextTop: CanvasRenderingContext2D;
      undo: (callback?: () => void) => void;
      redo: (callback?: () => void) => void;
      canRedo: boolean;
      canUndo: boolean;
      historyUndo: [];
      historyRedo: [];
      clearHistory: () => void;
      _historyEvents: any;
    }
    interface IObjectOptions {
      id?: string | undefined;
    }
  }
}
