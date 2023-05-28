import { fabric } from 'fabric';
import { Editor } from '..';

export class GridLine {
  private editor: Editor;
  private gridSize: number;
  private gridColor: string;
  private lines: fabric.Object[] = [];

  constructor(
    editor: Editor,
    gridSize: number = 4,
    gridColor: string = '#000000'
  ) {
    this.editor = editor;
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
    const workspaceWidth = this.editor.workspace?.getScaledWidth()!;
    const workspaceHeight = this.editor.workspace?.getScaledHeight()!;
    const cellWidth = workspaceWidth / (this.gridSize + 1);
    const cellHeight = workspaceHeight / (this.gridSize + 1);

    for (let x = 1; x <= this.gridSize; x++) {
      const xPos = cellWidth * x;
      const verticalLine = new fabric.Line([xPos, 0, xPos, workspaceHeight], {
        stroke: this.gridColor,
        strokeWidth: 1,
        selectable: false,
        evented: false,
        strokeDashArray: [5, 5],
      });
      this.lines.push(verticalLine);
      this.editor.canvas.add(verticalLine);
    }

    for (let y = 1; y <= this.gridSize; y++) {
      const yPos = cellHeight * y;
      const horizontalLine = new fabric.Line([0, yPos, workspaceWidth, yPos], {
        stroke: this.gridColor,
        strokeWidth: 1,
        selectable: false,
        evented: false,
        strokeDashArray: [5, 5],
      });
      this.lines.push(horizontalLine);
      this.editor.canvas.add(horizontalLine);
    }
  }

  private clearGridLines() {
    // this.lines.forEach((line) => this.editor.canvas.remove(line));
    // this.lines = [];
    this.lines.forEach((line) => {
      line.off('selected');
      this.editor.canvas.remove(line);
    });
    this.lines = [];
  }
}
