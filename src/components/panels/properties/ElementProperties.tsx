import { styled } from 'styled-components';
import Fill from './Fill';
import Stroke from './Stroke';

export default function ElementProperties() {
  return (
    <Wrap>
      <div className="color-block-wrap">
        <Fill />
        <Stroke />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .color-block-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
