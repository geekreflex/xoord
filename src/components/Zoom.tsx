import { useEditor } from '@/context/Editor';

export default function Zoom() {
  const { editor } = useEditor();

  const handleZoomIn = () => {
    if (editor) {
      editor.setZoomAuto(1);
    }
  };
  const handleZoomOut = () => {};
  return (
    <div>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
    </div>
  );
}
