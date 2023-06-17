import { useEditorContext } from '@/context/EditorContext';
import { AddIcon } from '@/icons';
import { BtnWrap, Button } from '@/styles/global';
import { styled } from 'styled-components';

export default function TextTool() {
  const { tool } = useEditorContext();
  return (
    <Wrap>
      <BtnWrap>
        <Button onClick={() => tool?.addText()}>
          <span id="btn-icon">
            <AddIcon />
          </span>
          <span id="btn-text">Add your text</span>
        </Button>
      </BtnWrap>
    </Wrap>
  );
}

const Wrap = styled.div``;
