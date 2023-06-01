import Icon from '@/components/common/Icon';
import { IconName } from '@/types/icons';
import { styled } from 'styled-components';

interface TabListProps {
  name: string;
  alias: string;
  icon: IconName;
}

interface TabProps {
  tabList: TabListProps[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function PropertieTab({
  tabList,
  activeTab,
  setActiveTab,
}: TabProps) {
  const handleTabSwitch = (val: string) => {
    setActiveTab(val);
  };

  return (
    <TabWrap>
      <div className="tab-list">
        {tabList.map((tab) => (
          <div
            className={`tab ${tab.alias === activeTab ? 'active' : ''}`}
            onClick={() => handleTabSwitch(tab.alias)}
          >
            <Icon name={tab.icon} hover={false} size="big" />
          </div>
        ))}
      </div>
    </TabWrap>
  );
}

const TabWrap = styled.div`
  width: 50px;
  border-left: 1px solid ${(props) => props.theme.colors.borderColor2};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor2};

  .tab-list {
    display: flex;
    flex-direction: column;

    .tab {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 999;
      cursor: pointer;
      transition: all 300ms;

      &.active:before {
        content: '';
        width: calc(100% + 2px);
        height: 100%;
        position: absolute;
        bottom: 0;
        background-color: white;
        z-index: -1;
        border-top: 1px solid ${(props) => props.theme.colors.borderColor2};
        border-bottom: 1px solid ${(props) => props.theme.colors.borderColor2};
      }
    }
  }
`;
