import { styled } from 'styled-components';
import Expander from './common/Expander';
import { useEffect, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { fabric } from 'fabric';
import Range from './common/Range';
import { useAppSelector } from '@/app/hooks';

interface ShadowState {
  color: string;
  offsetX: number;
  offsetY: number;
  blur: number;
}

export default function Shadow() {
  const [checked, setChecked] = useState(false);
  const { editor } = useEditorContext();

  const { object } = useAppSelector((state) => state.editor);
  const [shadow, setShadow] = useState<ShadowState>({
    color: '#333',
    offsetX: 5,
    offsetY: 5,
    blur: 10,
  });

  useEffect(() => {
    if (object && object.shadow) {
      console.log(object.shadow);
      const obj = object.shadow as ShadowState;
      if (obj.blur || obj.offsetX || obj.offsetY) {
        setChecked(true);
        setShadow(obj);
      } else {
        setChecked(false);
      }
    }
  }, [object]);

  const handleAddShadow = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      const updatedShadow = new fabric.Shadow(shadow);
      setShadow(updatedShadow as ShadowState);
      if (activeObject) {
        activeObject.set({
          shadow: updatedShadow,
        });
        editor.canvas.renderAll();
      }
    }
  };

  const handleClearShadow = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      const updatedShadow = new fabric.Shadow({});
      setShadow(updatedShadow as ShadowState);
      activeObject?.set({
        shadow: updatedShadow,
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
    }
    setChecked(val);
  };

  return (
    <Expander
      checked={checked}
      onChange={handleChange}
      onAdd={handleAddShadow}
      label="Shadow"
    >
      <Wrap>
        <div className="offset-x">
          <Range
            min={-100}
            max={100}
            step={1}
            value={shadow.offsetX}
            onChange={handleOffsetX}
          />
        </div>
        <div className="offset-y">
          <Range
            min={-100}
            max={100}
            step={1}
            value={shadow?.offsetY}
            onChange={handleOffsetY}
          />
        </div>
        <div className="blur">
          <Range
            min={0}
            max={100}
            step={1}
            value={shadow?.blur}
            onChange={handleBlur}
          />
        </div>
      </Wrap>
    </Expander>
  );
}

const Wrap = styled.div``;
