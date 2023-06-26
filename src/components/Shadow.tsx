import { styled } from 'styled-components';
import Expander from './common/Expander';
import { useEffect, useRef, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { fabric } from 'fabric';
import Range from './common/Range';
import NumberInput from './common/NumberInput';
import { LineX } from '@/styles/global';
import ColorBlock from './common/ColorBlock';
import ColorPicker from './widget/ColorPicker';
import useClickOutside from '@/hooks/useClickOutside';

interface ShadowState {
  color: string;
  offsetX: number;
  offsetY: number;
  blur: number;
}

export default function Shadow() {
  const ref = useRef(null);
  const [checked, setChecked] = useState(true);
  const { editor, selectedObjects } = useEditorContext();
  const [visible, setVisible] = useState(false);

  const _shadow = {
    offsetX: 5,
    offsetY: 5,
    blur: 10,
  };

  const [shadow, setShadow] = useState<ShadowState>({
    color: '#333',
    offsetX: 5,
    offsetY: 5,
    blur: 10,
  });

  useEffect(() => {
    if (selectedObjects) {
      if (selectedObjects[0].shadow) {
        setChecked(true);
        setShadow(selectedObjects[0].shadow as ShadowState);
      } else {
        setChecked(false);
      }
    }
  }, [selectedObjects]);

  const handleAddShadow = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      const updatedShadow = new fabric.Shadow(_shadow);
      setShadow(updatedShadow as ShadowState);
      setChecked(true);
      if (activeObject) {
        activeObject.set({
          shadow: updatedShadow,
        });
      }
      editor.canvas.renderAll();
    }
  };

  const handleClearShadow = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      setShadow({} as ShadowState);
      activeObject?.set({
        shadow: undefined,
      });
      editor.canvas.renderAll();
    }
  };

  const handleOffsetX = (offsetX: number) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      const updatedShadow = new fabric.Shadow({ ...shadow, offsetX });
      activeObject?.set({
        shadow: updatedShadow,
      });
      setShadow(updatedShadow as ShadowState);
      editor.canvas.renderAll();
    }
  };

  const handleOffsetY = (offsetY: number) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      const updatedShadow = new fabric.Shadow({ ...shadow, offsetY });
      activeObject?.set({
        shadow: updatedShadow,
      });
      setShadow(updatedShadow as ShadowState);
      editor.canvas.renderAll();
    }
  };

  const handleBlur = (blur: number) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      const updatedShadow = new fabric.Shadow({ ...shadow, blur });
      activeObject?.set({
        shadow: updatedShadow,
      });
      setShadow(updatedShadow as ShadowState);
      editor.canvas.renderAll();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.checked;
    if (!val) {
      handleClearShadow();
    } else {
      handleAddShadow();
      console.log(val);
    }
    setChecked(val);
  };

  const handleColorChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      const updatedShadow = new fabric.Shadow({ ...shadow, color });
      activeObject?.set({
        shadow: updatedShadow,
      });
      setShadow(updatedShadow as ShadowState);
      editor.canvas.renderAll();
    }
  };

  useClickOutside(ref, () => setVisible(false));

  return (
    <Expander
      checked={checked}
      onChange={handleChange}
      onAdd={handleAddShadow}
      label="Shadow"
    >
      <Wrap>
        <div className="color-block-wrap" ref={ref}>
          <h4>Color</h4>
          <ColorBlock color={shadow.color} onClick={() => setVisible(true)} />
          {visible && (
            <ColorPicker
              color={shadow?.color}
              onChange={handleColorChange}
              label="Fill"
              close={() => setVisible(false)}
            />
          )}
        </div>
        <LineX />
        <div className="blur">
          <div className="item-wrap">
            <h4>Blur</h4>
            <div className="number-wrap">
              <NumberInput value={shadow.blur} onChange={handleBlur} />
            </div>
          </div>
          <Range
            min={0}
            max={100}
            step={1}
            value={shadow.blur}
            onChange={handleBlur}
          />
        </div>
        <LineX />

        <div className="offset-x">
          <div className="item-wrap">
            <h4>Offset-X</h4>
            <div className="number-wrap">
              <NumberInput value={shadow.offsetX} onChange={handleOffsetX} />
            </div>
          </div>
          <Range
            min={-100}
            max={100}
            step={1}
            value={shadow.offsetX}
            onChange={handleOffsetX}
          />
        </div>
        <LineX />
        <div className="offset-y">
          <div className="item-wrap">
            <h4>Offset-Y</h4>
            <div className="number-wrap">
              <NumberInput value={shadow.offsetY} onChange={handleOffsetY} />
            </div>
          </div>
          <Range
            min={-100}
            max={100}
            step={1}
            value={shadow?.offsetY}
            onChange={handleOffsetY}
          />
        </div>
      </Wrap>
    </Expander>
  );
}

const Wrap = styled.div`
  .item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 12px;
  }

  .number-wrap {
    width: 50%;
  }

  .color-block-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
