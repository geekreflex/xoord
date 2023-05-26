import { useEditor } from '@/context/EditorContext';
import { styled } from 'styled-components';

export default function Zoom() {
  const { editor } = useEditor();

  const handleZoomIn = () => {
    if (editor) {
      editor.zoomIn();
    }
  };
  const handleZoomOut = () => {
    if (editor) {
      editor.zoomOut();
    }
  };
  return (
    <ZoomWrap>
      <div>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={handleZoomIn}>Zoom In</button>
      </div>
    </ZoomWrap>
  );
}

const ZoomWrap = styled.div`
  position: fixed;
  bottom: 30px;
  right: 50px;
  background-color: #ffffff;
`;
