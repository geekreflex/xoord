import { fabric } from 'fabric';

export class GridLine {
  private canvas: fabric.Canvas;
  private gridSize: number;
  private gridColor: string;
  private lines: fabric.Object[] = [];

  constructor(canvas: fabric.Canvas, gridSize: number, gridColor: string) {
    this.canvas = canvas;
    this.gridSize = gridSize;
    this.gridColor = gridColor;
  }

  public toggleGrid(showGrid: boolean) {
    if (showGrid) {
      this.drawGridLines();
    } else {
      this.clearGridLines();
    }
  }

  public setGridSize(gridSize: number) {
    this.gridSize = gridSize;
    if (this.lines.length > 0) {
      this.clearGridLines();
      this.drawGridLines();
    }
  }

  private drawGridLines() {
    const workspaceWidth = this.canvas.getWidth();
    const workspaceHeight = this.canvas.getHeight();
    const cellWidth = workspaceWidth / (this.gridSize + 1);
    const cellHeight = workspaceHeight / (this.gridSize + 1);

    for (let x = 1; x <= this.gridSize; x++) {
      const xPos = cellWidth * x;
      const verticalLine = new fabric.Line([xPos, 0, xPos, workspaceHeight], {
        stroke: this.gridColor,
        strokeWidth: 1,
        selectable: false,
        strokeDashArray: [5, 5],
      });
      this.lines.push(verticalLine);
      this.canvas.add(verticalLine);
    }

    for (let y = 1; y <= this.gridSize; y++) {
      const yPos = cellHeight * y;
      const horizontalLine = new fabric.Line([0, yPos, workspaceWidth, yPos], {
        stroke: this.gridColor,
        strokeWidth: 1,
        selectable: false,
        strokeDashArray: [5, 5],
      });
      this.lines.push(horizontalLine);
      this.canvas.add(horizontalLine);
    }
  }

  private clearGridLines() {
    this.lines.forEach((line) => this.canvas.remove(line));
    this.lines = [];
  }
}
