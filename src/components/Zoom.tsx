import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setCurrentZoom } from '@/features/editorSlice';
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowDownIcon } from '@/icons';
import { LineX } from '@/styles/global';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

export default function Zoom() {
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { currentZoom } = useAppSelector((state) => state.editor);
  const [visible, setVisible] = useState(false);

  useClickOutside(ref, () => setVisible(false));

  useEffect(() => {
    handleUpdateZoom();
  }, [editor]);

  const handleZoomIn = () => {
    const zoomFactor = 1.1;
    if (editor) {
      const zoom = editor.canvas.getZoom() * zoomFactor;
      editor.setZoomAuto(zoom);
    }
    handleUpdateZoom();
  };

  const handleZoomOut = () => {
    const zoomFactor = 0.9;
    if (editor) {
      const zoom = editor.canvas.getZoom() * zoomFactor;
      editor.setZoomAuto(zoom);
    }
    handleUpdateZoom();
  };

  const handleZoom100 = () => {
    if (editor) {
      editor.setZoomAuto(1);
    }
    handleUpdateZoom();
  };

  const handleZoomToFit = () => {
    if (editor) {
      editor.zoomToFit();
    }
    handleUpdateZoom();
  };

  const handleZoomToWidth = () => {
    if (editor) {
      editor.zoomToFill();
    }
    handleUpdateZoom();
  };

  const handleZoomToSelection = () => {
    if (editor) {
      editor.zoomToSelection();
    }
    handleUpdateZoom();
  };

  const handleUpdateZoom = () => {
    if (editor) {
      const zoom = editor?.canvas.getZoom();
      dispatch(setCurrentZoom(zoom * 100));
    }
  };

  return (
    <Wrap ref={ref}>
      <div className="zoom-level-view" onClick={() => setVisible(!visible)}>
        <span id="zoom-level">{currentZoom.toFixed()}%</span>
        <span id="zoom-arr" className="arrow">
          <ArrowDownIcon />
        </span>
      </div>
      {visible && (
        <div className="zoom-list-wrap">
          <ul className="zoom-list">
            <li>
              <div className="inner" onClick={handleZoomIn}>
                <span id="zoom-text">Zoom In</span>
                <span id="zoom-key">Ctrl+ =</span>
              </div>
            </li>
            <li>
              <div className="inner" onClick={handleZoomOut}>
                <span id="zoom-text">Zoom Out</span>
                <span id="zoom-key">Ctrl+ –</span>
              </div>
            </li>
            <LineX />
            <li>
              <div className="inner" onClick={handleZoom100}>
                <span id="zoom-text">Zoom to 50%</span>
                <span id="zoom-key"></span>
              </div>
            </li>
            <li>
              <div className="inner" onClick={handleZoom100}>
                <span id="zoom-text">Zoom to 100%</span>
                <span id="zoom-key">Shift+ 0</span>
              </div>
            </li>
            <li>
              <div className="inner" onClick={handleZoom100}>
                <span id="zoom-text">Zoom to 200%</span>
                <span id="zoom-key"></span>
              </div>
            </li>
            <li>
              <div className="inner" onClick={handleZoomToFit}>
                <span id="zoom-text">Zoom to Fit</span>
                <span id="zoom-key">Shift+ 1</span>
              </div>
            </li>
            <li>
              <div className="inner" onClick={handleZoomToWidth}>
                <span id="zoom-text">Zoom to Width</span>
                <span id="zoom-key">Shift+ 2</span>
              </div>
            </li>
            <li>
              <div className="inner" onClick={handleZoomToSelection}>
                <span id="zoom-text">Zoom to Selection</span>
                <span id="zoom-key">Shift+ 3</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  user-select: none;
  .zoom-level-view {
    display: flex;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 10px;
    border-radius: ${(props) => props.theme.radius.small};
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 60px;
    cursor: pointer;
    border: 1px solid transparent;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    &:hover {
      background-color: ${(props) => props.theme.colors.hoverColor};
      border: 1px solid ${(props) => props.theme.colors.borderColor};
    }
  }

  span {
    display: flex;
  }

  #zoom-level {
    font-size: 12px;
    font-weight: 600;
  }

  .zoom-list-wrap {
    width: 250px;
    position: absolute;
    bottom: 50px;
    background-color: ${(props) => props.theme.colors.hoverColor};
    padding: 6px 0;
    border-radius: ${(props) => props.theme.radius.small};
    border: 1px solid ${(props) => props.theme.colors.borderColor};

    .zoom-list {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        font-size: 13px;
        font-weight: 400;

        #zoom-key {
          color: #777;
        }

        .inner {
          display: flex;
          padding: 7px 15px;
          margin: 0 5px;
          cursor: pointer;
          border-radius: ${(props) => props.theme.radius.small};
          justify-content: space-between;
          align-items: center;
          &:hover {
            background-color: #09f;
            #zoom-key,
            #zoom-text {
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
