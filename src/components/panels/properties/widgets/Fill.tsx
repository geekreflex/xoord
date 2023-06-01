import ToggleSwitch from '@/components/common/ToggleSwitch';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function Fill() {
  const { editor, selectedObjects } = useEditorContext();
  const selectedObject = selectedObjects?.[0];
  const [hasFill, setHasFill] = useState<boolean>(false);
  const [previousFill, setPreviousFill] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (selectedObject) {
      setHasFill(selectedObject.fill ? true : false);
      setPreviousFill(selectedObject.fill as string);
    }
  }, [selectedObject]);

  const handleToggleFill = () => {
    if (selectedObject) {
      if (selectedObject.fill) {
        setPreviousFill(selectedObject.fill as string);
        selectedObject.set('fill', undefined);
      } else {
        const fill = previousFill || '#000000';
        selectedObject.set('fill', fill);
      }
      editor?.canvas.requestRenderAll();
      setHasFill(!!selectedObject.fill);
    }
  };

  return (
    <FillWrap>
      <div
        className="block"
        style={{
          backgroundColor: selectedObject && (selectedObject.fill as string),
        }}
      ></div>
      <ToggleSwitch checked={hasFill} onChange={handleToggleFill} id="fill" />
    </FillWrap>
  );
}

const FillWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .block {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
  }
`;
