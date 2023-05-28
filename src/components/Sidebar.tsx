import { styled } from 'styled-components';
import Icon from './common/Icon';
import { IconName } from '@/types/icons';
import ToolsPanel from './panels/tools/ToolsPanel';
import { useApp } from '@/context/AppContext';
import { ToolType } from '@/types/app';

interface IItems {
  name: string;
  icon: IconName;
  disabled?: boolean;
  alias?: 'element';
}

const items: IItems[] = [
  { name: 'Elements', icon: 'shapesIcon' },
  { name: 'Images', icon: 'imageIcon' },
  { name: 'Text', icon: 'textIcon' },
  { name: 'Templates', icon: 'grid3Icon' },
  { name: 'Backgrounds', icon: 'bgIcon' },
];

export default function Sidebar() {
  const { toolPanel, openToolPanel } = useApp();

  const handleItemPanelOpen = (name: string) => {
    openToolPanel(name as ToolType);
  };

  return (
    <SidebarWrap>
      <div className="sidebar-items">
        {items.map((item) => (
          <Icon
            key={item.name}
            name={item.icon as IconName}
            disabled={item.disabled}
            title={item.name}
            size="big"
            click={() => handleItemPanelOpen(item.name.toLowerCase())}
          />
        ))}
      </div>
      {toolPanel && <ToolsPanel />}
    </SidebarWrap>
  );
}

const SidebarWrap = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};
  width: 80px;
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 5px;
  position: relative;

  .sidebar-items {
  }
`;
