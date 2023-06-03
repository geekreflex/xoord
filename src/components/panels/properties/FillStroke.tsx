import { styled } from 'styled-components';
import { Fill, Stroke } from './widgets';

export default function FillStroke() {
  return (
    <FillStrokeWrap>
      <Fill />
      <Stroke />
    </FillStrokeWrap>
  );
}

const FillStrokeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
