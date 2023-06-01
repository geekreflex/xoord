import { styled } from 'styled-components';
import { Fill, Alignment, Stroke } from './widgets';

export default function ElementProperties() {
  return (
    <Wrap>
      <div className="color-block-wrap">
        <Fill />
        <Stroke />
        <Alignment />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  height: 100%;
  .color-block-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }
`;
