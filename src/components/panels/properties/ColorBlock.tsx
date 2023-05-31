import ToggleSwitch from '@/components/common/ToggleSwitch';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export function FillColorBlock() {
  const { editor, selectedObjects } = useEditorContext();
  const selectedObject = selectedObjects?.[0];
  const [hasFill, setHasFill] = useState<boolean>(false);

  useEffect(() => {
    if (selectedObject) {
      const activeObject = selectedObject;
      setHasFill(activeObject ? !!activeObject.fill : false);
    }
  }, [selectedObject]);

  const handleToggleFill = () => {
    if (selectedObject) {
      if (selectedObject.fill) {
        selectedObject.previousFill = selectedObject.fill as string;
        selectedObject.set('fill', undefined);
      } else {
        const fill = selectedObject.previousFill || '#000000';
        selectedObject.set('fill', fill);
      }
      editor?.canvas.requestRenderAll();
      setHasFill(!!selectedObject.fill);
    }
  };

  if (!selectedObject) {
    return null;
  }

  return (
    <BlockWrap>
      <div className="block-wrap">
        <div
          className="block"
          style={{
            backgroundColor: selectedObject.fill as string,
          }}
        ></div>
        <p>Fill</p>
      </div>
      <ToggleSwitch checked={hasFill} onChange={handleToggleFill} id="fill" />
    </BlockWrap>
  );
}

const BlockWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .block-wrap {
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
      font-size: 14px;
    }
  }

  .block {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
  }
`;
