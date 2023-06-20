import { useEditorContext } from '@/context/EditorContext';
import { AddIcon } from '@/icons';
import { Button } from '@/styles/global';
import { styled } from 'styled-components';

export default function TextTool() {
  const { tool } = useEditorContext();

  const onAddText = () => {
    tool?.addText();
  };

  return (
    <Wrap>
      <div className="btn-wrap">
        <Button onClick={onAddText}>
          <span id="btn-icon">
            <AddIcon />
          </span>
          <span id="btn-text">Add your text</span>
        </Button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;
