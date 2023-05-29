import { useEditorContext } from '@/context/EditorContext';
import 'fabric-history';

export default function History() {
  const { editor } = useEditorContext();

  const workspaceObj = () => {
    const workspace = editor?.canvas.getObjects()[0];

    console.log(workspace);

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
    <div>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
}
