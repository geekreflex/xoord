import { useEditor } from '@/context/EditorContext';
import { toPercent } from '@/utils/percent';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function Zoom() {
  const [visible, setVisible] = useState(false);
  const [currentZoom, setCurrentZoom] = useState<number>(0);
  const zoomLevels = [
    0.2, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 3.0, 4.0, 5.0,
  ];
  const { editor } = useEditor();

  useEffect(() => {
    if (editor) {
      const zoom = editor.canvas.getZoom();
      setCurrentZoom(zoom);
    }
  }, [editor]);

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
      setCurrentZoom(level);
      editor.setZoomAuto(level);
    }
  };

  return (
    <ZoomWrap>
      <ZoomInOut>
        <button className="zoom-btn zoomin-btn" onClick={handleZoomOut}>
          -
        </button>
        <div className="zoom-view">{`${toPercent(currentZoom)}%`}</div>
        <button className="zoom-btn zoomout-btn" onClick={handleZoomIn}>
          +
        </button>
      </ZoomInOut>
      <ZoomLevels>
        {zoomLevels.map((level) => (
          <div
            className="level"
            onClick={() => handleZoomLevel(level)}
            key={level}
          >
            {`${toPercent(level)}%`}
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

  /* For Webkit based browsers (Chrome, Safari, Opera) */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* ::-webkit-scrollbar-track {
    background: #f1f1f1;
  } */

  ::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ZoomInOut = styled.div`
  display: flex;
  gap: 10px;

  .zoom-view {
    border: 1px solid #888;
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #e6e3e3;
    font-size: 14px;
  }

  .zoom-btn {
    width: 30px;
    border: none;
    outline: none;
  }
`;
const ZoomLevels = styled.div`
  position: absolute;
  bottom: 50px;
  background-color: #fff;
  width: 100px;
  max-height: 200px;
  right: 50%;
  overflow-y: auto;
  border-radius: 5px;
  padding: 10px 0;
  transform: translateX(50%);

  .level {
    cursor: pointer;
    padding: 6px 10px;
    font-size: 14px;
    &:hover {
      color: deepskyblue;
    }
  }
`;
