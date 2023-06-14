import { styled } from 'styled-components';
import Icon from './shared/Icon';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect, useState } from 'react';
import Tooltip from './shared/Tooltip';

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

  const onUndo = () => {
    editor?.canvas.undo();
    editor?.resetWorkspace();
  };
  const onRedo = () => {
    editor?.canvas.redo();
    editor?.resetWorkspace();
  };

  return (
    <Wrap>
      <div className="redo-undo">
        <Tooltip content="Undo">
          <Icon name="undoIcon" click={onUndo} disabled={!canUndo} />
        </Tooltip>
        <Tooltip content="Redo">
          <Icon name="redoIcon" click={onRedo} disabled={!canRedo} />
        </Tooltip>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  .redo-undo {
    display: flex;
  }
`;
