import { useEffect } from 'react';
import { styled } from 'styled-components';
import { Editor } from '@/components/core/Editor';
import { fabric } from 'fabric';
import { useEditor } from '@/context/EditorContext';

export default function Canvas() {
  const { setEditor } = useEditor();

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('canvas', {
      fireRightClick: true,
      stopContextMenu: true,
      controlsAboveOverlay: true,
    });

    const workspaceEl = document.getElementById('workspace');
    const option = { width: 300, height: 200 };

    const editor = new Editor(fabricCanvas, workspaceEl!, option);
    setEditor(editor);

    return () => {
      editor.dispose();
      setEditor(null);
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
  height: 100%;
  height: 100%;

  #workspace {
    height: 100%;
    height: 100%;
    background-color: #eee;
  }
`;
