import { styled } from 'styled-components';
import Draggable from '../common/Draggable';
import Alignment from '../Alignment';
import Opacity from '../Opacity';
import { LineX } from '@/styles/global';
import FlipRotate from '../FlipRotate';

export default function ObjectOptions({ close }: { close: () => void }) {
  return (
    <Draggable title="Options" close={close}>
      <Wrap>
        <Alignment />
        <LineX />
        <Opacity />
        <LineX />
        <FlipRotate />
      </Wrap>
    </Draggable>
  );
}

const Wrap = styled.div`
  width: 250px;
  padding: 0 10px;
`;
