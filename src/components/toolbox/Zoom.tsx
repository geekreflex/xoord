import { useEditor } from '@/context/EditorContext';
import { toPercent } from '@/utils/percent';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Icon from '../common/Icon';

export default function Zoom() {
  const [currentZoom, setCurrentZoom] = useState<number>(0);
  // @ts-ignore
  const zoomLevels = [
    0.2, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 3.0, 4.0, 5.0,
  ];
  const { editor } = useEditor();

  const setZoom = () => {
    const canvas = editor?.canvas;
    if (canvas) {
      const zoom = canvas.getZoom();
      setCurrentZoom(zoom);
    }
  };

  const handleZoomIn = () => {
    editor?.zoomIn();
    setZoom();
  };
  const handleZoomOut = () => {
    editor?.zoomOut();
    setZoom();
  };

  useEffect(() => {
    const canvas = editor?.canvas;

    if (canvas) {
      canvas.on('mouse:wheel', () => {
        setCurrentZoom(canvas.getZoom());
      });
      setCurrentZoom(canvas.getZoom());
    }
  }, [editor]);

  return (
    <ZoomWrap>
      <ZoomInOut>
        <button className="zoom-btn zoomin-btn" onClick={handleZoomOut}>
          <Icon name="zoomOutIcon" />
        </button>
        <p>{toPercent(currentZoom)}%</p>
        <button className="zoom-btn zoomout-btn" onClick={handleZoomIn}>
          <Icon name="zoomInIcon" />
        </button>
      </ZoomInOut>
    </ZoomWrap>
  );
}

const ZoomWrap = styled.div`
  display: flex;
  align-items: center;
`;
const ZoomInOut = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  button {
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    padding: 8px;
    border-radius: 10px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  p {
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    font-size: 14px;
    font-weight: 400;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    line-height: 1;
    border-radius: 5px;
  }
`;
