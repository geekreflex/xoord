import { fabric } from 'fabric';
import { Editor } from '..';

export class GridLine {
  private editor: Editor;
  private gridXSize: number;
  private gridYSize: number;
  private gridColor: string;
  private lines: fabric.Object[] = [];
  private isGridVisible: boolean = false;

  constructor(
    editor: Editor,
    gridXSize: number = 4,
    gridYSize: number = 4,
    gridColor: string = '#000000'
  ) {
    this.editor = editor;
    this.gridXSize = gridXSize;
    this.gridYSize = gridYSize;
    this.gridColor = gridColor;
  }

  public toggleGrid(showGrid: boolean) {
    this.isGridVisible = showGrid;
    if (showGrid) {
      this.drawGridLines();
    } else {
      this.clearGridLines();
    }
  }

  public setGridSize(gridXSize: number, gridYSize: number) {
    this.gridXSize = gridXSize;
    this.gridYSize = gridYSize;
    if (this.lines.length > 0) {
      this.clearGridLines();
      this.drawGridLines();
    }
  }

  private drawGridLines() {
    const workspaceWidth = this.editor.workspace?.getScaledWidth()!;
    const workspaceHeight = this.editor.workspace?.getScaledHeight()!;
    const cellWidth = workspaceWidth / (this.gridXSize + 1);
    const cellHeight = workspaceHeight / (this.gridYSize + 1);

    for (let x = 1; x <= this.gridXSize; x++) {
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

    for (let y = 1; y <= this.gridYSize; y++) {
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

  public isVisible(): boolean {
    return this.isGridVisible;
  }
}
