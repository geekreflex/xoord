import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { EditorWorkspace } from './EditorWorkspace';
import { fabric } from 'fabric';
import SetSize from './SetSize';
import Zoom from './Zoom';

export default function Canvas() {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [workspace, setWorkspace] = useState<EditorWorkspace | null>(null);

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('canvas');
    setCanvas(fabricCanvas);

    const workspaceEl = document.getElementById('workspace');
    const option = { width: 300, height: 200 };

    console.log(fabricCanvas);

    const editorWorkspace = new EditorWorkspace(
      fabricCanvas,
      workspaceEl!,
      option
    );
    setWorkspace(editorWorkspace);
    console.log(fabricCanvas.getZoom());

    /**
     * I removed this because it causes Uncaught TypeError:
     * although the error doesn't break the app
     */

    /**
     * I added it back because when removed, I can't
     * click or select an element. This is top priority.
     */

    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  const addCircle = () => {
    if (canvas) {
      const circle = new fabric.Circle({
        radius: 50,
        fill: 'red',
        left: 100,
        top: 100,
      });
      canvas.add(circle);
    }
  };

  const startDing = () => {
    if (workspace) {
      workspace.startDing();
    }
  };

  const endDing = () => {
    if (workspace) {
      workspace?.endDing();
    }
  };

  return (
    <Wrap>
      <div id="workspace">
        <canvas id="canvas" />
      </div>
      <div className="presets">
        <div>
          <button onClick={startDing}>Start Ding</button>
          <button onClick={endDing}>End Ding</button>
          <button onClick={addCircle}>Add Circle</button>
        </div>
        {workspace && <SetSize editorWorkspace={workspace} />}
        {workspace && <Zoom editorWorkspace={workspace} />}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 85vh;

  #workspace {
    height: 100%;
    background-color: #eee;
  }

  .presets {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
