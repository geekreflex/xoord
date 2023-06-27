import { styled } from 'styled-components';
import NumberInput from './common/NumberInput';
import Range from './common/Range';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import { useState } from 'react';

export default function Opacity() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);
  const [value, setValue] = useState(0);

  const handleOpacity = (val: number) => {
    handleValue(val);
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      dispatch(setObject({ opacity: val }));
      activeObject?.set({ opacity: val });
      editor.canvas.renderAll();
    }
  };

  const handleOpacityInput = (val: number) => {
    val = val / 100;
    handleValue(val);
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      dispatch(setObject({ opacity: val }));
      activeObject?.set({ opacity: val });
      editor.canvas.renderAll();
    }
  };

  const handleValue = (val: number) => {
    const reset = Math.round(val * 100);
    setValue(reset);
  };

  return (
    <Wrap>
      <div className="input-number-range-wrap">
        <h4>Opacity</h4>
        <div className="number-wrap">
          <NumberInput value={value} onChange={handleOpacityInput} />
        </div>
      </div>
      <Range
        min={0}
        max={1}
        step={0.001}
        value={object?.opacity!}
        onChange={handleOpacity}
      />
    </Wrap>
  );
}

const Wrap = styled.div``;
