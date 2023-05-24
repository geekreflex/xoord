import { EditorWorkspace } from './EditorWorkspace';

export default function Zoom({
  editorWorkspace,
}: {
  editorWorkspace: EditorWorkspace;
}) {
  const handleZoomIn = () => {
    editorWorkspace.zoomIn();
  };
  const handleZoomOut = () => {
    editorWorkspace.zoomOut();
  };
  return (
    <div>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
    </div>
  );
}
