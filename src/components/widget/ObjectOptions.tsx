import { styled } from 'styled-components';
import Draggable from '../common/Draggable';

export default function ObjectOptions({ close }: { close: () => void }) {
  return (
    <Draggable title="Options" close={close}>
      <Wrap>
        <p>Object Options</p>
      </Wrap>
    </Draggable>
  );
}

const Wrap = styled.div``;
