import { useEditorContext } from '@/context/EditorContext';
import useClickOutside from '@/hooks/useClickOutside';
import { MaximizeIcon } from '@/icons';
import { Button } from '@/styles/global';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import ColorPicker from '../widget/ColorPicker';
import { useAppDispatch } from '@/app/hooks';
import { toggleResizeModal } from '@/features/appSlice';

export default function BackgroundProperties() {
  const colorBlockRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { editor } = useEditorContext();
  const [color, setColor] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    setColor(editor?.workspace?.fill as string);
  }, [editor]);

  const colors = [
    { color: '#c4b19e' },
    { color: '#d9939c' },
    { color: '#bb9143' },
    { color: '#01000c' },
    { color: '#2ee190' },
    { color: '#ff9009' },
    { color: '#0f99e0' },
    { color: '#e20e0e' },
    { color: '#94b0b4' },
  ];

  useClickOutside(colorBlockRef, () => setVisible(false));

  const handleBgColor = (color: string) => {
    if (editor) {
      editor.setWorkspaceBg(color);
      setColor(color);
    }
  };

  const handleShowResizeModal = () => {
    dispatch(toggleResizeModal(true));
  };

  return (
    <Wrap>
      <div className="bg-resize-wrap">
        <Button onClick={handleShowResizeModal}>
          <span id="btn-icon">
            <MaximizeIcon />
          </span>
          <span id="btn-text">Resize Template</span>
        </Button>
        <div className="bg-size">
          {editor?.workspace?.width} &times; {editor?.workspace?.height}
        </div>
      </div>

      <div className="bg-presets">
        <h4>Backgrounds</h4>
        <div ref={colorBlockRef} className="bg-preset-list">
          <div
            onClick={() => setVisible(true)}
            className="bg__color-block bg-color-block"
            style={{ backgroundColor: color as string }}
          >
            <span className="bg__color-block-angle"></span>
          </div>
          {visible && (
            <ColorPicker
              label={'Background Color'}
              color={color as string}
              close={() => setVisible(false)}
              onChange={handleBgColor}
            />
          )}
          {colors.map((color) => (
            <div
              onClick={() => handleBgColor(color.color)}
              className="bg-color-block"
              style={{ backgroundColor: color.color }}
            ></div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .bg-presets {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${(props) => props.theme.colors.secondary}50;
    padding: 15px;
    border-radius: ${(props) => props.theme.radius.small};
    border: 1px solid ${(props) => props.theme.colors.borderColor};

    h4 {
      font-size: 14px;
    }

    .bg-preset-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 8px;
    }

    .bg-color-block {
      height: 40px;
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      border-radius: ${(props) => props.theme.radius.small};
      cursor: pointer;
      transition: all 100ms linear;
      &:hover {
        opacity: 0.6;
        transform: scale(1.08);
      }
    }
  }

  .bg-resize-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .bg-size {
      font-size: 13px;
    }
  }

  .bg__color-block {
    display: flex;
    height: ${(props) => props.theme.resets.btnInputHeight};
    cursor: pointer;
    position: relative;
    border-radius: ${(props) => props.theme.radius.small};
    height: 40px;

    .bg__color-block-angle {
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 8px solid transparent;
      border-top: 8px solid transparent;
      border-left: 8px solid ${(props) => props.theme.colors.secondary};
      transform: rotate(45deg);
      right: 2px;
      bottom: -3px;
      display: block;
      filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
    }
  }
`;
