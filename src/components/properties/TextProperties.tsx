import { styled } from 'styled-components';
import Alignment from '../Alignment';
import Fill from '../Fill';
import { LineX } from '@/styles/global';

export default function TextProperties() {
  return (
    <Wrap>
      <Alignment />
      <LineX />
      <Fill />
      <LineX />
    </Wrap>
  );
}

const Wrap = styled.div``;
