import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import { styled } from 'styled-components';
import { FILL } from '@/core/lib/defaultShapes';
import Toggle from './common/Toggle';
import { useEffect, useState } from 'react';

export default function Fill() {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState<boolean>(false);
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);

  // useEffect(() => {
  //   if (object && object.fill) {
  //     setChecked(true);
  //   } else {
  //     setChecked(false);
  //   }
  // }, [object]);

  const handleFillChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ fill: color });
        dispatch(setObject({ fill: color }));
      }
      editor.canvas.renderAll();
    }
  };

  const handleAddFill = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ fill: FILL });
      dispatch(setObject({ fill: FILL }));
      editor.canvas.renderAll();
    }
  };

  const handleClearFill = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ fill: undefined });
      dispatch(setObject({ fill: undefined }));
      editor.canvas.renderAll();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  return (
    <Wrap className="prop-wrap">
      <div>
        <Toggle checked={checked} onChange={handleChange} />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
`;
