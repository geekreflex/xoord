import { styled } from 'styled-components';
import Alignment from '../Alignment';
import { LineX } from '@/styles/global';

export default function CircleProperties() {
  return (
    <Wrap>
      <Alignment />
      <LineX />
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 10px;
`;
