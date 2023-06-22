import { styled } from 'styled-components';
import Alignment from '../Alignment';
import { LineX } from '@/styles/global';
import Fill from '../Fill';
import Stroke from '../Stroke';

export default function ShapeProperties() {
  return (
    <Wrap>
      <Alignment />
      <LineX />
      <Fill />
      <LineX />
      <Stroke />
      <LineX />
    </Wrap>
  );
}

const Wrap = styled.div``;
