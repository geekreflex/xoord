import { styled } from 'styled-components';
import Draggable from '../common/Draggable';

interface FontListProps {
  close: () => void;
}

export default function FontList({ close }: FontListProps) {
  return (
    <Draggable title="Font list" close={close}>
      <Wrap>
        <p>Your fonts</p>
      </Wrap>
    </Draggable>
  );
}

const Wrap = styled.div`
  width: 250px;
  min-height: 400px;
  max-height: 70vh;
`;
