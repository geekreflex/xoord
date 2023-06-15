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
        <div className={`${!canUndo && 'disabled'}`}>
          <Tooltip content="Undo">
            <span className="icon-wrap">
              <Icon name="undoIcon" click={onUndo} />
            </span>
          </Tooltip>
        </div>
        <div className={`${!canRedo && 'disabled'}`}>
          <Tooltip content="Redo">
            <span className="icon-wrap">
              <Icon name="redoIcon" click={onRedo} />
            </span>
          </Tooltip>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .redo-undo {
    display: flex;
    gap: 5px;
  }

  .disabled {
    cursor: not-allowed;
    position: relative;

    .icon-wrap {
      opacity: 0.2;
    }

    * {
      cursor: not-allowed;
      &:hover {
        background-color: transparent;
      }
    }
  }
`;
