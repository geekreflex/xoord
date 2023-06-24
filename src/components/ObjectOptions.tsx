import { ArrowRightIcon, CopyIcon, TrashIcon } from '@/icons';
import { styled } from 'styled-components';
import Tooltip from './common/Tooltip';
import { useEditorContext } from '@/context/EditorContext';

export default function ObjectOptions() {
  const { controller } = useEditorContext();

  const handleDelete = () => {
    if (controller) {
      controller.delete();
    }
  };

  const handleDuplicate = () => {
    if (controller) {
      controller.duplicate();
    }
  };

  return (
    <Wrap>
      <Tooltip content="Delete">
        <button className="iconn" onClick={handleDelete}>
          <TrashIcon />
        </button>
      </Tooltip>
      <Tooltip content="Duplicate">
        <button className="iconn" onClick={handleDuplicate}>
          <CopyIcon />
        </button>
      </Tooltip>
      <button className="btn-text-arrow">
        <span>Options</span>
        <span className="arrow">
          <ArrowRightIcon />
        </span>
      </button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .iconn {
    border: 1px solid ${(props) => props.theme.colors.borderColor};
  }

  .btn-text-arrow {
    width: 65%;
  }
`;
