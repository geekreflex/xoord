import { useEditorContext } from '@/context/EditorContext';
import 'fabric-history';
import { styled } from 'styled-components';
import Icon from '../common/Icon';

export default function History() {
  const { editor } = useEditorContext();

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
    if (editor?.canvas.historyUndo.length! <= 1) {
      return;
    }
    editor?.canvas.undo();
    workspaceObj();
  };

  const handleRedo = () => {
    editor?.canvas.redo();
    workspaceObj();
  };

  return (
    <HistroyWrap>
      <Icon name="undoIcon" click={handleUndo} size="medium" />
      <Icon name="redoIcon" click={handleRedo} size="medium" />
    </HistroyWrap>
  );
}

const HistroyWrap = styled.div`
  display: flex;
  gap: 5px;
`;
