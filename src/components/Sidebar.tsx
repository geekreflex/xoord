import { BgIcon, Grid3Icon, ImageIcon, ShapesIcon, TextIcon } from '@/icons';
import { styled } from 'styled-components';

const items = [
  { name: 'Elements', icon: <ShapesIcon /> },
  { name: 'Image', icon: <ImageIcon /> },
  { name: 'Text', icon: <TextIcon /> },
  { name: 'Templates', icon: <Grid3Icon /> },
  { name: 'Backgrounds', icon: <BgIcon /> },
];

export default function Sidebar() {
  return (
    <SidebarWrap>
      {items.map((item) => (
        <Item key={item.name}>
          <span className="item-icon">{item.icon}</span>
          <p>{item.name}</p>
        </Item>
      ))}
    </SidebarWrap>
  );
}

const SidebarWrap = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};
  width: 80px;
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 5px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 70px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  .item-icon {
    font-size: 24px;
    display: flex;
    margin-bottom: 7px;
  }
  p {
    font-size: 11px;
    font-weight: 600;
  }
`;
