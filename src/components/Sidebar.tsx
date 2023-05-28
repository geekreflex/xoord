import { styled } from 'styled-components';
import Icon from './common/Icon';
import { IconName } from '@/types/icons';

interface IItems {
  name: string;
  icon: IconName;
  disabled?: boolean;
}

const items: IItems[] = [
  { name: 'Elements', icon: 'shapesIcon' },
  { name: 'Image', icon: 'imageIcon' },
  { name: 'Text', icon: 'textIcon' },
  { name: 'Templates', icon: 'grid3Icon' },
  { name: 'Backgrounds', icon: 'bgIcon' },
];

export default function Sidebar() {
  return (
    <SidebarWrap>
      {items.map((item) => (
        <Icon
          key={item.name}
          name={item.icon as IconName}
          disabled={item.disabled}
          title={item.name}
          size="big"
        />
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
