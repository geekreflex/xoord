import { styled } from 'styled-components';
import Tooltip from './Tooltip';
import { useEffect, useRef, useState } from 'react';

interface SwitchProps {
  items: { label: string; icon: React.ReactNode; alias: string }[];
  activeItem: string;
  onSwitch: (action: string) => void;
}

export default function Switch({ items, activeItem, onSwitch }: SwitchProps) {
  const [gliderWidth, setGliderWidth] = useState(0);
  const [gliderOffset, setGliderOffset] = useState(0);
  const gliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gliderRef.current) {
      return;
    }

    const activeTabElement = gliderRef.current.querySelector(
      '.active-switch'
    ) as HTMLElement | null;
    if (activeTabElement) {
      const offsetLeft = activeTabElement.offsetLeft;
      const width = activeTabElement.offsetWidth;
      setGliderOffset(offsetLeft);
      setGliderWidth(width);
    }
  }, [activeItem]);

  return (
    <Wrap ref={gliderRef}>
      <div className="switch-items">
        {items.map((item) => (
          <Tooltip content={item.label}>
            <div
              onClick={() => onSwitch(item.alias)}
              className={`${
                activeItem === item.alias ? 'active-switch' : ''
              } switch-item`}
            >
              {item.icon}
            </div>
          </Tooltip>
        ))}
      </div>
      <div
        className="glider"
        style={{
          transform: `translateX(${gliderOffset}px)`,
          width: `${gliderWidth}px`,
        }}
      ></div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 35px;
  align-items: center;

  .switch-items {
    width: 100%;
    display: flex;
    background-color: ${(props) => props.theme.colors.highlightColor};
    padding: 5px;
    border-radius: ${(props) => props.theme.radius.medium};

    .switch-item {
      flex: 1;
      width: 100%;
      display: flex;
      padding: 5px;
      cursor: pointer;
      position: relative;
      align-items: center;
      justify-content: center;
      z-index: 1;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }

    .active-switch {
      opacity: 1;
    }
  }

  .glider {
    position: absolute;
    bottom: 4px;
    height: calc(100% - 8px);
    background-color: ${(props) => props.theme.colors.hoverColor};
    border-radius: ${(props) => props.theme.radius.small};
    transition: transform 0.3s ease;
    width: 100%;
  }
`;
