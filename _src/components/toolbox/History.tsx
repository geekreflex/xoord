import { useEditorContext } from '@/context/EditorContext';
import { styled } from 'styled-components';
import Icon from '../common/Icon';
import { useEffect, useState } from 'react';

export default function History() {
  const { editor } = useEditorContext();
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [canRedo, setCanRedo] = useState<boolean>(false);

  useEffect(() => {
    if (editor) {
      editor.canvas.on('object:added', runCan);
      editor.canvas.on('object:modified', runCan);
      editor.canvas.on('object:removed', runCan);
    }
  }, [editor]);

  const runCan = () => {
    const undoVal = editor?.canvas.historyUndo;
    const redoVal = editor?.canvas.historyRedo;
    if (undoVal) {
      const toll = undoVal.length > 1;
      setCanUndo(toll);
    }

    if (redoVal) {
      const toll = redoVal.length > 0;
      setCanRedo(toll);
    }
  };

  const workspaceObj = () => {
    const workspace = editor?.canvas.getObjects()[0];

    if (workspace) {
      workspace.hoverCursor = 'default';
      workspace.set('selectable', false);
      workspace.set('hasControls', false);
      editor.canvas.renderAll();
    }
  };

  const handleUndo = () => {
    editor?.canvas.undo();
    workspaceObj();
  };

  const handleRedo = () => {
    editor?.canvas.redo();
    workspaceObj();
  };

  return (
    <HistroyWrap>
      <Icon name="undoIcon" click={handleUndo} disabled={!canUndo} size="big" />
      <Icon name="redoIcon" click={handleRedo} disabled={!canRedo} size="big" />
    </HistroyWrap>
  );
}

const HistroyWrap = styled.div`
  display: flex;
  gap: 5px;
`;
