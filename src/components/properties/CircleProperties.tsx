import { styled } from 'styled-components';
import Alignment from '../Alignment';
import { LineX } from '@/styles/global';
import Fill from '../Fill';

export default function CircleProperties() {
  return (
    <Wrap>
      <Alignment />
      <LineX />
      <Fill />
      <LineX />
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 10px;
`;
