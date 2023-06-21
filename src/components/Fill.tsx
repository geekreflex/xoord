import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import { Close2Icon } from '@/icons';
import { styled } from 'styled-components';
import React, { useRef, useState } from 'react';
import { showColorPicker } from '@/features/appSlice';
import ColorPicker from './widget/ColorPicker';
import useClickOutside from '@/hooks/useClickOutside';

export default function Fill() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);

  const handleClearFill = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ fill: undefined });
      dispatch(setObject({ fill: undefined }));
    }
    editor?.canvas.renderAll();
  };

  useClickOutside(ref, () => setVisible(false));

  return (
    <Wrap ref={ref}>
      <p>Fill</p>
      <div className="fill-items">
        <div className="color-sect" onClick={() => setVisible(!visible)}>
          <div
            className="color-block"
            style={{ backgroundColor: object?.fill as string }}
          ></div>
          {object?.fill ? (
            <span className="color-value">{`${object?.fill}`}</span>
          ) : (
            <span className="">Add...</span>
          )}
        </div>
        {object?.fill && (
          <span className="color-clear" onClick={handleClearFill}>
            <Close2Icon />
          </span>
        )}
      </div>
      {visible && <ColorPicker />}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  p {
    font-size: 13px;
  }

  .fill-items {
    display: flex;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 5px;
    width: 70%;
    border-radius: ${(props) => props.theme.radius.small};
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 12px;
      display: flex;
      font-weight: 600;
    }

    .color-value {
      text-transform: uppercase;
      font-size: 14px;
    }
  }

  .color-sect {
    display: flex;
    align-items: center;
    gap: 10px;

    .color-value {
      font-size: 12px;
    }
  }

  .color-block {
    width: 24px;
    height: 24px;
    border-radius: ${(props) => props.theme.radius.small};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
  }

  .color-clear {
    cursor: pointer;
    padding: 3px;
  }
`;
