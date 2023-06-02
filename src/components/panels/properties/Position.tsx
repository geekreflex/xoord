import { Alignment, Flip, SizeCoord } from './widgets';
import { styled } from 'styled-components';

export default function Position() {
  return (
    <PositionWrap>
      <Alignment />
      <SizeCoord />
      <Flip />
    </PositionWrap>
  );
}

const PositionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
