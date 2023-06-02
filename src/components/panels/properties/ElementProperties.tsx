import { styled } from 'styled-components';
import FillStroke from './FillStroke';
import Position from './Position';

export default function ElementProperties({ tab }: { tab: string }) {
  return (
    <Wrap>
      <div className="color-block-wrap">
        {tab === 'fill-stroke' && <FillStroke />}
        {tab === 'position' && <Position />}
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
