import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

interface TabProps {
  tabs: { name: string }[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

/**
 *
 * Don't forget to use iPhone tab style
 */

export default function Tab({ tabs, activeTab, setActiveTab }: TabProps) {
  const [gliderWidth, setGliderWidth] = useState(0);
  const [gliderOffset, setGliderOffset] = useState(0);
  const gliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gliderRef.current) {
      return;
    }

    const activeTabElement = gliderRef.current.querySelector(
      '.active'
    ) as HTMLElement | null;
    if (activeTabElement) {
      const offsetLeft = activeTabElement.offsetLeft;
      const width = activeTabElement.offsetWidth;
      setGliderOffset(offsetLeft);
      setGliderWidth(width);
    }
  }, [activeTab]);

  const onTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Wrap>
      <div className="tablist" ref={gliderRef}>
        {tabs.map((tab, index) => (
          <div
            className={tab.name === activeTab ? 'active tab' : 'tab'}
            onClick={() => onTabClick(tab.name)}
          >
            {tab.name}
          </div>
        ))}
        <div
          className="glider"
          style={{
            transform: `translateX(${gliderOffset}px)`,
            width: `${gliderWidth}px`,
          }}
        ></div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 3px;
  border-radius: ${(props) => props.theme.radius.medium};

  .tablist {
    display: flex;
    position: relative;

    .tab {
      flex: 1;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      position: relative;
      z-index: 9;
    }

    .glider {
      position: absolute;
      bottom: 0;
      height: 100%;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: ${(props) => props.theme.radius.medium};
      transition: transform 0.3s ease;
      width: 100%;
    }
  }
`;
