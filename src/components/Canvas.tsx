import { useEffect } from 'react';
import { styled } from 'styled-components';
import { EditorWorkspace } from './EditorWorkspace';
import { fabric } from 'fabric';

export default function Canvas() {
  let _canvas: fabric.Canvas;
  let _workspace: EditorWorkspace;

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas');
    _canvas = canvas;

    const workspaceEl = document.getElementById('workspace');
    const option = { width: 300, height: 200 };

    const editorWorkspace = new EditorWorkspace(canvas, workspaceEl!, option);
    _workspace = editorWorkspace;

    /**
     * I removed this because it causes Uncaught TypeError:
     * although the error doesn't break the app
     */

    /**
     * I added it back because when removed, I can't
     * click or select an element. This is top priority.
     */

    return () => {
      canvas.dispose();
    };
  }, []);

  const addCircle = () => {
    const circle = new fabric.Circle({
      radius: 50,
      fill: 'red',
      left: 100,
      top: 100,
    });
    _canvas.add(circle);
  };

  const startDing = () => {
    _workspace.startDing();
  };

  const endDing = () => {
    _workspace.endDing();
  };

  return (
    <Wrap>
      <div id="workspace">
        <canvas id="canvas" />
      </div>
      <div>
        <button onClick={startDing}>Add Circle</button>
        <button onClick={endDing}>Add Circle</button>
        <button onClick={addCircle}>Add Circle</button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid red;
  height: 95vh;

  #workspace {
    border: 1px solid blue;
    height: 100%;
    background-color: #eee;
    /* height: 100%;
    width: 100%; */
  }
`;
