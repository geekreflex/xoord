import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { EditorWorkspace } from './editor';
import { fabric } from 'fabric';
import Tool from './Tool';

export default function Editor({ id }: { id: string }) {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [workspace, setWorkspace] = useState<EditorWorkspace | null>(null);

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas(id);
    setCanvas(fabricCanvas);

    const workspaceEl = document.getElementById('workspace');
    const option = { width: 300, height: 200 };

    const editorWorkspace = new EditorWorkspace(
      fabricCanvas,
      workspaceEl!,
      id,
      option
    );
    setWorkspace(editorWorkspace);

    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  return (
    <Wrap>
      <div id="workspace">
        <canvas id={id} />
      </div>
      {canvas && <Tool canvas={canvas} />}
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100%;

  #workspace {
    height: 100%;
    background-color: #eee;
  }
`;
