import { styled } from 'styled-components';

export default function GridList() {
  const list: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <GridListWrap>
      <div className="grid-list">
        {list.map((item) => (
          <div className="grid-item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </GridListWrap>
  );
}

const GridListWrap = styled.div`
  .grid-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    .grid-item {
      background-color: #f1f1f1;
      height: 200px;
      padding: 5px;
      border-radius: ${(props) => props.theme.radius.small};
      border: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border: 1px solid ${(props) => props.theme.colors.borderColor};
      }
    }
  }
`;
