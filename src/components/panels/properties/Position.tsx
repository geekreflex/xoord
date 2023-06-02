import { Alignment } from './widgets';
import Flip from './widgets/Flip';
import { styled } from 'styled-components';

export default function Position() {
  return (
    <PositionWrap>
      <Alignment />
      <Flip />
    </PositionWrap>
  );
}

const PositionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
