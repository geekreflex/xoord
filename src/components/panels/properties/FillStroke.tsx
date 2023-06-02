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

const FillStrokeWrap = styled.div``;
