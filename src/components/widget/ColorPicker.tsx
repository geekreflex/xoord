import { useAppDispatch } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import { Close2Icon } from '@/icons';
import { useEffect, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import Draggable from 'react-draggable';
import { styled } from 'styled-components';

export default function ColorPicker() {
  const dispatch = useAppDispatch();
  const { editor, selectedObjects } = useEditorContext();
  const [color, setColor] = useState('');

  useEffect(() => {
    if (selectedObjects?.length) {
      setColor(selectedObjects[0]?.fill as string);
    }
  }, [selectedObjects]);

  const handleChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set('fill', color);
      dispatch(setObject({ fill: color }));
      editor.canvas.renderAll();
    }
  };

  return (
    <Draggable handle=".handle">
      <Wrap>
        <div className="color-picker-header handle">
          <h4 className="handle">Fill</h4>
          <span className="">
            <Close2Icon />
          </span>
        </div>
        <div className="color-picker-wrap">
          <HexAlphaColorPicker color={color} onChange={handleChange} />
        </div>
      </Wrap>
    </Draggable>
  );
}

const Wrap = styled.div`
  width: 270px;
  top: 100px;
  z-index: 9999;
  position: fixed;
  right: 300px;
  background-color: ${(props) => props.theme.colors.primary};
  padding-bottom: 20px;
  border-radius: ${(props) => props.theme.radius.large};
  box-shadow: ${(props) => props.theme.shadow.shadow2};

  .color-picker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    cursor: grab;

    h4 {
      font-size: 14px;
    }

    span {
      display: flex;
      padding: 10px;
      cursor: pointer;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }

  .color-picker-wrap {
    width: 100%;
    padding: 0 20px;

    .react-colorful {
      width: auto;
    }

    .react-colorful__saturation {
      margin-bottom: 10px;
      border-radius: 10px;
    }

    .react-colorful__saturation-pointer {
      border-width: 3px;
      width: 15px;
      height: 15px;
    }
    .react-colorful__hue {
      height: 8px;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    .react-colorful__hue-pointer {
      border-width: 3px;
      width: 15px;
      height: 15px;
    }

    .react-colorful__alpha {
      height: 8px;
      border-radius: 10px;
    }

    .react-colorful__alpha-pointer {
      border-width: 3px;
      width: 15px;
      height: 15px;
    }
  }
`;
