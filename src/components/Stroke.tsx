import { styled } from 'styled-components';
import { useEditorContext } from '@/context/EditorContext';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setObject } from '@/features/editorSlice';
import { STROKE } from '@/core/lib/defaultShapes';
import NumberInput from './common/NumberInput';
import Select from './common/Select';

import Expander from './common/Expander';
import { useEffect, useState } from 'react';

export default function Stroke() {
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
  const { object } = useAppSelector((state) => state.editor);
  const { editor } = useEditorContext();

  useEffect(() => {
    if (object && object.stroke) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [object]);

  const handleStrokeChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ stroke: color });
        dispatch(setObject({ stroke: color }));
      }
      editor.canvas.renderAll();
    }
  };

  const handleAddStroke = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ stroke: STROKE });
      dispatch(setObject({ stroke: STROKE }));
      editor.canvas.renderAll();
    }
  };

  const handleClearStroke = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ stroke: undefined });
      dispatch(setObject({ stroke: undefined }));
      editor.canvas.renderAll();
    }
  };

  const handleStrokeWidth = (width: number) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ strokeWidth: width });
      dispatch(setObject({ strokeWidth: width }));
      editor.canvas.renderAll();
    }
  };

  const handleStrokeStyle = (value: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      const arr = value ? value.split(' ').map(Number) : [];
      activeObject?.set({ strokeDashArray: arr });
      dispatch(setObject({ strokeDashArray: arr }));
      editor.canvas.renderAll();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.checked;
    if (!val) {
      handleClearStroke();
    } else {
      handleAddStroke();
    }
    setChecked(val);
  };

  const strokeStyles = [
    { label: 'Solid', value: '' },
    { label: 'Dashed', value: '30 10' },
    { label: 'Dotted', value: '5 5' },
  ];

  return (
    <Expander
      checked={checked}
      onChange={handleChange}
      onAdd={handleAddStroke}
      label="Stroke"
    >
      <Wrap>Hello from stroke</Wrap>
    </Expander>
  );
}

const Wrap = styled.div``;
