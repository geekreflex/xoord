import ToggleSwitch from '@/components/common/ToggleSwitch';
import { useEditorContext } from '@/context/EditorContext';
import { DividerX, Title } from '@/styles/global';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ColorBlock from '../shared/ColorBlock';
import ColorPalette from '../shared/ColorPalette';

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

  const handleFill = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedObject) {
      const fill = e.target.value;
      selectedObject?.set('fill', fill);
      setPreviousFill(fill);
    }
    editor?.canvas.renderAll();
  };

  return (
    <FillWrap>
      <Title>Fill</Title>
      <DividerX />
      <div className="fill-block-wrap">
        <ColorBlock
          color={selectedObject && (selectedObject.fill as string)}
          onChange={handleFill}
        />
        {/* <ColorPalette /> */}
        <ToggleSwitch checked={hasFill} onChange={handleToggleFill} id="fill" />
      </div>
    </FillWrap>
  );
}

const FillWrap = styled.div`
  .fill-block-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .block {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
  }
`;
