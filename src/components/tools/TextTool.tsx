import { useEditorContext } from '@/context/EditorContext';
import { AddIcon } from '@/icons';
import { Button } from '@/styles/global';
import { styled } from 'styled-components';
import SearchInput from '../common/SearchInput';
import { useState } from 'react';

export default function TextTool() {
  const [query, setQuery] = useState('');
  const { tool } = useEditorContext();

  const handleAddText = () => {
    tool?.addText();
  };

  const handleChange = (value: string) => {
    setQuery(value);
  };

  return (
    <Wrap>
      <div className="btn-wrap">
        <Button onClick={handleAddText}>
          <span id="btn-icon">
            <AddIcon />
          </span>
          <span id="btn-text">Add your text</span>
        </Button>
      </div>
      <SearchInput
        placeholder="Search text..."
        query={query}
        onChange={handleChange}
      />
    </Wrap>
  );
}

const Wrap = styled.div``;
