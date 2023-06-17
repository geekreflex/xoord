import { useEditorContext } from '@/context/EditorContext';
import { AddIcon } from '@/icons';
import { Button } from '@/styles/global';
import { styled } from 'styled-components';

export default function TextTool() {
  const { tool } = useEditorContext();
  return (
    <Wrap>
      <div className="btn-wrap">
        <Button onClick={() => tool?.addText()}>
          <span className="btn-icon">
            <AddIcon />
          </span>
          <span className="btn-text">Add your text</span>
        </Button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .btn-wrap {
    display: flex;
    justify-content: center;
  }
`;
