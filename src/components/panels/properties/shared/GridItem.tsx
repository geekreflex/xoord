import Icon from '@/components/common/Icon';
import { IPos } from '@/types/app';
import { styled } from 'styled-components';

interface GroupCardProps {
  title: string;
  items: IPos[];
}

export default function GridItem({ title, items }: GroupCardProps) {
  return (
    <GridItemWrap>
      <h4>{title || 'Untitled'}</h4>
      <Divider />
      <GridItemMain>
        {items.map((item) => (
          <div className="item" key={item.alias} onClick={item.func}>
            <Icon hover={false} name={item.icon} size="big" />
            <p>{item.name}</p>
          </div>
        ))}
      </GridItemMain>
    </GridItemWrap>
  );
}

const GridItemWrap = styled.div`
  h4 {
    font-size: 14px;
    line-height: 1;
    display: flex;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.borderColor};
  margin: 10px 0;
`;

const GridItemMain = styled.div`
  display: flex;
  justify-content: space-around;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;

  .item {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    gap: 10px;
    border-radius: ${(props) => props.theme.radius.small};
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors.hoverColor1};
    }

    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
