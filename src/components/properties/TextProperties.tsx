import { styled } from 'styled-components';
import Alignment from '../Alignment';
import Fill from '../Fill';
import { LineX } from '@/styles/global';
import Stroke from '../Stroke';
import Text from '../Text';

export default function TextProperties() {
  return (
    <Wrap>
      <Alignment />
      <LineX />
      <Text />
      <LineX />
      <Fill />
      <LineX />
      <Stroke />
      <LineX />
    </Wrap>
  );
}

const Wrap = styled.div``;
