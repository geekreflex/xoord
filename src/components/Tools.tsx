import { IconName } from '@/types/icon';
import { styled } from 'styled-components';
import Icon from './shared/Icon';

export default function Tools() {
  interface ITools {
    name: string;
    icon: IconName;
    disabled?: boolean;
    alias?: 'element';
  }

  const tools: ITools[] = [
    { name: 'Elements', icon: 'shapesIcon' },
    { name: 'Images', icon: 'imageIcon' },
    { name: 'Text', icon: 'textIcon' },
    { name: 'Templates', icon: 'grid3Icon' },
    { name: 'Draw', icon: 'brushIcon' },
    { name: 'Customize', icon: 'bgIcon' },
  ];

  return (
    <Wrap>
      {tools.map((tool) => (
        <Icon
          key={tool.name}
          name={tool.icon as IconName}
          disabled={tool.disabled}
          label={tool.name}
          size="big"
        />
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
