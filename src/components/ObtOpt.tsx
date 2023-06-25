import { ArrowDownIcon, CopyIcon, TrashIcon } from '@/icons';
import { styled } from 'styled-components';
import Tooltip from './common/Tooltip';
import { useEditorContext } from '@/context/EditorContext';
import { useRef, useState } from 'react';
import ObjectOptions from './widget/ObjectOptions';
import useClickOutside from '@/hooks/useClickOutside';

export default function ObjOpt() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
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

  useClickOutside(ref, () => setVisible(false));

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
      <div ref={ref} className="options-wrap">
        <button className="btn-text-arrow" onClick={() => setVisible(true)}>
          <span>Options</span>
          <span className="arrow">
            <ArrowDownIcon />
          </span>
        </button>
        {visible && <ObjectOptions close={() => setVisible(false)} />}
      </div>
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

  .options-wrap {
    width: 65%;
  }
`;
