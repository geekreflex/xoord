import { styled } from 'styled-components';

export default function ColorBlock({ color }: { color: any }) {
  return (
    <BlockWrap>
      <div className="block" style={{ backgroundColor: color }}></div>
      <div>p</div>
    </BlockWrap>
  );
}

const BlockWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .block {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;
