import ToggleSwitch from '@/components/common/ToggleSwitch';
import { useEditorContext } from '@/context/EditorContext';
import { fabric } from 'fabric';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export function FillColorBlock({ shape }: { shape: fabric.Object }) {
  const [checked, setChecked] = useState<boolean>(!!shape.fill);
  const { editor } = useEditorContext();

  const handleRemoveColor = () => {
    const oldColor = shape.fill;
    shape.set('fill', checked ? undefined : oldColor);
    setChecked(!checked);
    editor?.canvas.renderAll();
  };

  return (
    <BlockWrap>
      <div
        className="block"
        style={{ backgroundColor: shape.fill?.toString() }}
      ></div>
      <ToggleSwitch checked={checked} onChange={handleRemoveColor} id="fill" />
    </BlockWrap>
  );
}

export function StrokeColorBlock({ shape }: { shape: fabric.Object }) {
  const { editor } = useEditorContext();

  const handleRemoveColor = () => {
    shape.set('stroke', undefined);
    editor?.canvas.renderAll();
  };

  return (
    <BlockWrap>
      <div className="block" style={{ backgroundColor: shape.stroke }}></div>
      <ToggleSwitch
        checked={!!shape.stroke}
        onChange={handleRemoveColor}
        id="stroke"
      />
    </BlockWrap>
  );
}

const BlockWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .block {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;
