import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const fabricCanvas = new fabric.Canvas(canvasRef.current);
      fabricCanvas.setWidth(800);
      fabricCanvas.setHeight(800);

      let rect = new fabric.Rect({
        top: 100,
        left: 100,
        width: 60,
        height: 70,
        fill: 'red',
      });

      fabricCanvas.add(rect);
    }
  }, []);

  return (
    <CanvasWrap>
      <canvas ref={canvasRef}></canvas>
    </CanvasWrap>
  );
}

const CanvasWrap = styled.div`
  canvas {
    border: 2px solid #555;
  }
`;
