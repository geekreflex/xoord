import { IconName } from '@/types/icon';
import { styled } from 'styled-components';
import Icon from './shared/Icon';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setPanelTitle, switchActiveTool } from '@/features/appSlice';
import Tooltip from './shared/Tooltip';

export default function Tools() {
  const dispatch = useAppDispatch();
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

  return (
    <Wrap>
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
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .icon-wrap {
    display: flex;
    position: relative;
  }
`;
