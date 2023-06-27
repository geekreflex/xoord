import { styled } from 'styled-components';
import Draggable from '../common/Draggable';
import Alignment from '../Alignment';

export default function ObjectOptions({ close }: { close: () => void }) {
  return (
    <Draggable title="Options" close={close}>
      <Wrap>
        <Alignment />
      </Wrap>
    </Draggable>
  );
}

const Wrap = styled.div`
  width: 250px;
  padding: 0 10px;
`;
