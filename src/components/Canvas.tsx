import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { EditorWorkspace } from './EditorWorkspace';
import { fabric } from 'fabric';

export default function Canvas() {
  let _canvas: fabric.Canvas;

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas');
    const workspaceEl = document.getElementById('workspace');
    const option = { width: 300, height: 200 };

    _canvas = canvas;

    const editorWorkspace = new EditorWorkspace(canvas, workspaceEl!, option);

    console.log(editorWorkspace);

    /**
     * I removed this because it causes Uncaught TypeError:
     * although the error doesn't break the app
     */

    // return () => {
    //   canvas.dispose();
    // };
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

  return (
    <Wrap>
      <div id="workspace">
        <canvas id="canvas" />
      </div>
      <div>
        <button onClick={addCircle}>Add Circle</button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid red;
  height: 70vh;

  #workspace {
    border: 1px solid blue;
    height: 100%;
    background-color: #eee;
    /* height: 100%;
    width: 100%; */
  }
`;
