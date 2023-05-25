import { useEffect } from 'react';
import { styled } from 'styled-components';
import { Editor } from '@/components/core/Editor';
import { fabric } from 'fabric';
import { useEditor } from '@/context/Editor';

export default function Canvas() {
  const { setEditor } = useEditor();

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('canvas');

    const workspaceEl = document.getElementById('workspace');
    const option = { width: 300, height: 200 };

    const workspace = new Editor(fabricCanvas, workspaceEl!, option);
    setEditor(workspace);

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

  return (
    <Wrap>
      <div id="workspace">
        <canvas id="canvas" />
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
`;
