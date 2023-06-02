import { useEditorContext } from '@/context/EditorContext';
import { toPercent } from '@/utils/percent';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Icon from '../common/Icon';
import Popup from '../common/Popup';
import useClickOutside from '@/hooks/useClickOutside';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setCurrentZoom } from '@/features/editorSlice';

export default function Zoom() {
  const dispatch = useAppDispatch();
  const { currentZoom } = useAppSelector((state) => state.editor);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // const [currentZoom, setCurrentZoom] = useState<number>(0);
  // @ts-ignore
  const zoomLevels = [0.1, 0.25, 0.5, 0.75, 1.0, 1.5, 2.0, 4.0];
  const { editor } = useEditorContext();

  const updateCurrentZoom = () => {
    const canvas = editor?.canvas;
    if (canvas) {
      const zoom = canvas.getZoom();
      dispatch(setCurrentZoom(zoom));
    }
  };

  const handleZoomIn = () => {
    editor?.zoomIn();
    updateCurrentZoom();
  };

  const handleZoomOut = () => {
    editor?.zoomOut();
    updateCurrentZoom();
  };

  const handleSetZoom = (level: number) => {
    editor?.setZoomAuto(level);
    updateCurrentZoom();
  };

  const handleFitFill = (type: string) => {
    if (type === 'fill') {
      editor?.zoomToFill();
    }
    if (type === 'fit') {
      editor?.zoomToFit();
    }
    updateCurrentZoom();
  };

  useEffect(() => {
    const canvas = editor?.canvas;

    if (canvas) {
      canvas.on('mouse:wheel', () => {
        dispatch(setCurrentZoom(canvas.getZoom()));
      });
      dispatch(setCurrentZoom(canvas.getZoom()));
    }
  }, [editor]);

  const onShowZoomLevels = () => {
    setVisible(!visible);
  };

  useClickOutside(ref, () => setVisible(false));

  return (
    <ZoomWrap ref={ref}>
      <ZoomInOut>
        <Icon
          name="zoomOutIcon"
          disabled={currentZoom === 0.1}
          click={handleZoomOut}
        />
        <p onClick={onShowZoomLevels}>{toPercent(currentZoom)}%</p>
        <Icon
          name="zoomInIcon"
          disabled={currentZoom === 5}
          click={handleZoomIn}
        />
      </ZoomInOut>
      {visible && (
        <Popup head={false} pad={false} pos="top">
          <ZoomLevels>
            <div className="defined-levels">
              <span onClick={() => handleFitFill('fit')}>Zoom to Fit</span>
              <span onClick={() => handleFitFill('fill')}>Zoom to Fill</span>
            </div>
            {zoomLevels.map((level) => (
              <span key={level} onClick={() => handleSetZoom(level)}>
                {toPercent(level)}%
              </span>
            ))}
          </ZoomLevels>
        </Popup>
      )}
    </ZoomWrap>
  );
}

const ZoomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms linear;
`;
const ZoomInOut = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p {
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
    font-size: 14px;
    font-weight: 400;
    padding: 8px 20px;
    display: flex;
    align-items: center;
    line-height: 1;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    user-select: none;
  }
`;

const ZoomLevels = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  width: 180px;

  .defined-levels {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  }

  span {
    font-size: 14px;
    padding: 8px 15px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors.hoverColor2};
    }
  }
`;
