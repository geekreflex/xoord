import { styled } from 'styled-components';
import { FillColorBlock } from './ColorBlock';

export default function ElementProperties() {
  return (
    <Wrap>
      <div className="color-block-wrap">
        <FillColorBlock />
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
