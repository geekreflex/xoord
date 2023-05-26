import { useEditor } from '@/context/EditorContext';
import { styled } from 'styled-components';

export default function Zoom() {
  const zoomLevels = [20, 25, 50, 75, 125, 150, 175, 200, 300, 400, 500];
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

  const handleZoomLevel = (level: number) => {
    if (editor) {
      const toLevel = level / 100;
      editor.setZoomAuto(toLevel);
    }
  };

  return (
    <ZoomWrap>
      <ZoomInOut>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={handleZoomIn}>Zoom In</button>
      </ZoomInOut>
      <ZoomLevels>
        {zoomLevels.map((level) => (
          <div
            className="level"
            onClick={() => handleZoomLevel(level)}
            key={level}
          >
            {level}
          </div>
        ))}
      </ZoomLevels>
    </ZoomWrap>
  );
}

const ZoomWrap = styled.div`
  position: fixed;
  bottom: 30px;
  right: 50px;
  background-color: #ffffff;
`;

const ZoomInOut = styled.div``;
const ZoomLevels = styled.div`
  .level {
    cursor: pointer;
  }
`;
