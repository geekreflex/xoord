import { useEffect, useRef } from 'react';
import { Workspace } from './workspace';
import { fabric } from 'fabric';

interface WorkspaceCompProps {
  workspace: Workspace;
}

export default function WorkspaceComp({ workspace }: WorkspaceCompProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    workspace.setCanvas(canvas);

    return () => {
      workspace.setCanvas(null);
      canvas.dispose();
    };
  }, [workspace]);
  return <canvas ref={canvasRef} />;
}
