import { styled } from 'styled-components';
import Text from '../Text';
import Stroke from '../Stroke';
import { LineX } from '@/styles/global';

export default function TextProperties() {
  return (
    <Wrap>
      <Text />
      <LineX />
      <Stroke />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
