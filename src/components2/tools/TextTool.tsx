import { useEditorContext } from '@/context/EditorContext';
import { AddIcon } from '@/icons';
import { BtnWrap, Button, ToolWrap } from '@/styles/global';
import SearchInput from '../shared/SearchInput';

export default function TextTool() {
  const { tool } = useEditorContext();
  return (
    <ToolWrap>
      <BtnWrap>
        <Button onClick={() => tool?.addText()}>
          <span id="btn-icon">
            <AddIcon />
          </span>
          <span id="btn-text">Add your text</span>
        </Button>
      </BtnWrap>
      <SearchInput placeholder="Search Text" />
    </ToolWrap>
  );
}

