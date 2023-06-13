import { useEditorContext } from '@/context/EditorContext';
import { Editor } from '@/core/Editor';
import { fabric } from 'fabric';
import { useEffect } from 'react';
import { styled } from 'styled-components';

export default function Canvas() {
  const { setEditor } = useEditorContext();

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('canvas', {
      fireRightClick: true,
      stopContextMenu: true,
      controlsAboveOverlay: true,
    });

    const workspaceEl = document.getElementById('workspace');
    const option = { width: 3000, height: 3000 };

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
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  #workspace {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
