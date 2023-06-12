import { styled } from 'styled-components';
import { Fill, Stroke } from './widgets';

export default function Circle() {
  return (
    <Wrap>
      <Fill />
      {/* <Stroke /> */}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
