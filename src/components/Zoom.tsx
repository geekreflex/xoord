import { styled } from 'styled-components';
import RangeSlider from './shared/RangeSlider';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setCurrentZoom } from '@/features/editorSlice';
import { useEffect, useRef, useState } from 'react';
import Popup from './shared/Popup';
import Tooltip from './shared/Tooltip';
import useClickOutside from '@/hooks/useClickOutside';

export default function Zoom() {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const [visible, setVisible] = useState(false);
  const { currentZoom } = useAppSelector((state) => state.editor);
  const levels = [10, 25, 50, 75, 100, 150, 200, 300, 400];

  useEffect(() => {
    if (editor) {
      dispatch(setCurrentZoom(editor.canvas.getZoom() * 100));
    }
  }, [editor]);

  const onZoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const zoom = e.target.value;
    updateZoom(Number(zoom));
  };

  const onZoomLevel = (level: number) => {
    updateZoom(level);
  };

  const onZoomFitFill = (type: string) => {
    if (type === 'fill') {
      editor?.zoomToFill();
    }
    if (type === 'fit') {
      editor?.zoomToFit();
    }
    updateZoom(editor?.canvas.getZoom()! * 100);
  };

  const updateZoom = (zoom: number) => {
    const normZoom = zoom / 100;
    dispatch(setCurrentZoom(zoom));
    if (editor) {
      editor.setZoomAuto(normZoom);
    }
  };

  const onShowLevels = () => {
    setVisible(!visible);
  };

  useClickOutside(ref, () => setVisible(false));

  return (
    <Wrap>
      <div className="zoom-range">
        <RangeSlider min={8} max={400} value={currentZoom} onChange={onZoom} />
      </div>
      <div className="zoom-data" onClick={onShowLevels}>
        <Tooltip content="Zoom">
          <div className="zoom-value">{currentZoom.toFixed(0)}%</div>
        </Tooltip>
        {visible && (
          <Popup>
            <div className="zoom-levels">
              <div className="zoom-fit-fill">
                <div className="level" onClick={() => onZoomFitFill('fit')}>
                  Fit
                </div>
                <div className="level" onClick={() => onZoomFitFill('fill')}>
                  Fill
                </div>
              </div>
              <div className="line"></div>
              {levels.map((level) => (
                <div
                  key={level}
                  className="level"
                  onClick={() => onZoomLevel(level)}
                >
                  {level}%
                </div>
              ))}
            </div>
          </Popup>
        )}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  gap: 10px;

  .zoom-range {
    width: 100%;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.borderColor};
    margin: 5px 0;
  }

  .zoom-value {
    width: 80px;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
  }

  .zoom-data {
    display: flex;
    justify-content: center;
  }

  .zoom-levels {
    display: flex;
    z-index: 99;
    flex-direction: column-reverse;
    width: 150px;
    font-size: 14px;

    .level {
      padding: 10px 15px;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;
