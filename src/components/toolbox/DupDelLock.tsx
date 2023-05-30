import { styled } from 'styled-components';
import Icon from '../common/Icon';
import { useEditorContext } from '@/context/EditorContext';

export default function DupDelLock() {
  const { controller } = useEditorContext();

  const handleDelete = () => {
    controller?.delete();
  };

  return (
    <DupDelLockWrap>
      <Icon name="trashIcon" size="medium" click={handleDelete} />
      <Icon name="copyIcon" size="medium" />
      <Icon name="unlockIcon" size="medium" />
    </DupDelLockWrap>
  );
}

const DupDelLockWrap = styled.div`
  display: flex;
  gap: 5px;
`;