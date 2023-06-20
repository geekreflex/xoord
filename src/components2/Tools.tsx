import { IconName } from '@/types/icon';
import { styled } from 'styled-components';
import Icon from './shared/Icon';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setPanelTitle, switchActiveTool } from '@/features/appSlice';
import Tooltip from './shared/Tooltip';
import { useEffect, useRef, useState } from 'react';

export default function Tools() {
  const dispatch = useAppDispatch();
  const gliderRef = useRef<HTMLDivElement>(null);
  const [gliderWidth, setGliderWidth] = useState(0);
  const [gliderOffset, setGliderOffset] = useState(0);
  const { activeTool } = useAppSelector((state) => state.app);
  interface ITool {
    name: string;
    icon: IconName;
    disabled?: boolean;
    alias?: 'element';
    desc?: string;
  }

  const tools: ITool[] = [
    { name: 'Elements', icon: 'shapesIcon', desc: 'Elements and shapes' },
    { name: 'Images', icon: 'imageIcon', desc: 'Upload or browse images' },
    { name: 'Text', icon: 'textIcon', desc: 'Add text' },
    {
      name: 'Templates',
      icon: 'grid3Icon',
      desc: 'Start from a pre-built layout',
    },
    { name: 'Draw', icon: 'brushIcon', desc: 'Free drawing' },
    {
      name: 'Backgrounds',
      icon: 'bgIcon',
      desc: 'Choose a desired background',
    },
  ];

  const onToolClick = (tool: ITool) => {
    dispatch(switchActiveTool(tool.name.toLowerCase()));
    dispatch(setPanelTitle(tool.name));
  };

  useEffect(() => {
    if (!gliderRef.current) {
      return;
    }

    const activeTabElement = gliderRef.current.querySelector(
      '.active'
    ) as HTMLElement | null;
    if (activeTabElement) {
      const offsetTop = activeTabElement.offsetTop;
      const height = activeTabElement.offsetHeight;
      setGliderOffset(offsetTop);
      setGliderWidth(height);
    }
  }, [activeTool]);

  return (
    <Wrap ref={gliderRef}>
      <div>
        {tools.map((tool) => (
          <Tooltip
            key={tool.name}
            content={tool.desc || tool.name}
            placement={'right'}
          >
            <div
              className={`icon-wrap ${
                activeTool.toLowerCase() === tool.name.toLowerCase()
                  ? 'active'
                  : ''
              }`}
            >
              <Icon
                name={tool.icon as IconName}
                disabled={tool.disabled}
                label={tool.name}
                size="big"
                click={() => onToolClick(tool)}
                hover={false}
              />
            </div>
          </Tooltip>
        ))}
      </div>
      <div
        className="glider"
        style={{
          transform: `translateY(${gliderOffset}px)`,
          height: `${gliderWidth}px`,
          borderTop: `${gliderOffset === 50 ? 'none' : ''}`,
        }}
      ></div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;

  .icon-wrap {
    display: flex;
    position: relative;
    z-index: 9;
  }

  .active {
  }

  .glider {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: ${(props) => props.theme.colors.panelBg};
    transition: transform 0.3s ease;
    width: 70px;
    border-top: 1px solid ${(props) => props.theme.colors.borderColor};
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  }
`;
