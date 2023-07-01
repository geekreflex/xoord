import { styled } from 'styled-components';
import ObjectOptions from '../MoreAction';
import { Button } from '@/styles/global';
import { AiOutlineGroup } from 'react-icons/ai';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect } from 'react';

export default function SelectionProperties() {
  const { controller, editor } = useEditorContext();

  const handleGroup = () => {
    if (controller) {
      controller.group();
    }
  };

  const handleUngroup = () => {
    if (controller) {
      controller.ungroup();
    }
  };

  useEffect(() => {
    if (editor) {
      editor.canvas.on('selection:created', handleSelection);
      editor.canvas.on('selection:updated', handleSelection);
      editor.canvas.on('group:selected', handleSelection);
    }

    return () => {
      if (editor) {
        editor.canvas.off('selection:created', handleSelection);
        editor.canvas.off('selection:updated', handleSelection);
      }
    };
  }, [editor]);

  const handleSelection = (e: fabric.IEvent | any) => {
    console.log('here', e);
  };

  return (
    <Wrap>
      <div className="btn-wrap">
        <Button onClick={handleGroup}>
          <span id="btn-icon">
            <AiOutlineGroup />
          </span>
          <span id="btn-text">Group</span>
        </Button>
      </div>
      <div className="btn-wrap">
        <Button onClick={handleUngroup}>
          <span id="btn-icon">
            <AiOutlineGroup />
          </span>
          <span id="btn-text">Ungroup</span>
        </Button>
      </div>
      <ObjectOptions />
    </Wrap>
  );
}

const Wrap = styled.div``;
