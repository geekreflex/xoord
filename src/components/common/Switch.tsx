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
  const [index, setIndex] = useState(0);
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

  const handleIndex = () => {
    if (index === 0) {
      return 'gldr-first';
    }

    if (index === items.length - 1) {
      return 'gldr-last';
    }
  };

  return (
    <Wrap ref={gliderRef}>
      <div className="switch-items">
        {items.map((item, index) => (
          <Tooltip content={item.label}>
            <div
              onClick={() => {
                onSwitch(item.alias);
                setIndex(index);
              }}
              className={`${
                activeItem === item.alias ? 'active-switch' : ''
              } switch-item switch-${index}`}
            >
              {item.icon}
            </div>
          </Tooltip>
        ))}
      </div>
      <div
        className={`glider ${handleIndex()}`}
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
  height: 32px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: ${(props) => props.theme.radius.small};

  .switch-items {
    width: 100%;
    display: flex;
    height: 100%;

    .switch-item {
      flex: 1;
      display: flex;
      height: 32px;
      padding: 5px;
      cursor: pointer;
      position: relative;
      align-items: center;
      justify-content: center;
      z-index: 1;
      border-left: 1px solid ${(props) => props.theme.colors.borderColor};
      &:hover {
        background-color: ${(props) => props.theme.colors.hoverColor};
      }
    }
    .switch-0 {
      border-left: 0 !important;
      border-top-left-radius: ${(props) => props.theme.radius.small};
      border-bottom-left-radius: ${(props) => props.theme.radius.small};
    }

    .active-switch {
      &:hover {
        background-color: ${(props) => props.theme.colors.hoverActiveColor};
      }
    }
  }

  .glider {
    position: absolute;
    height: 32px;
    background-color: ${(props) => props.theme.colors.primary};
    transition: transform 0.3s ease;
    width: 100%;
    background-color: ${(props) => props.theme.colors.hoverActiveColor};
    border: 1px solid transparent;
  }

  .gldr-first {
    border-bottom-left-radius: ${(props) => props.theme.radius.small};
    border-top-left-radius: ${(props) => props.theme.radius.small};
  }

  .gldr-last {
    border-bottom-right-radius: ${(props) => props.theme.radius.small};
    border-top-right-radius: ${(props) => props.theme.radius.small};
  }
`;
