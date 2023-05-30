import { styled } from 'styled-components';
import Icon from '../common/Icon';

export default function DupDelLock() {
  return (
    <DupDelLockWrap>
      <Icon name="trashIcon" size="medium" />
      <Icon name="copyIcon" size="medium" />
      <Icon name="unlockIcon" size="medium" />
    </DupDelLockWrap>
  );
}

const DupDelLockWrap = styled.div`
  display: flex;
  gap: 5px;
`;
