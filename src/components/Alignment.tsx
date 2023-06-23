import {
  AlignBottomIcon,
  AlignHorizontalIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlignTopIcon,
  AlignVerticalIcon,
} from '@/icons';
import { styled } from 'styled-components';
import Tooltip from './common/Tooltip';
import { useEditorContext } from '@/context/EditorContext';

const list = [
  { name: 'Align Left', icon: <AlignLeftIcon />, action: 'left' },
  {
    name: 'Align Horizontally',
    icon: <AlignHorizontalIcon />,
    action: 'horizontal',
  },
  { name: 'Align Right', icon: <AlignRightIcon />, action: 'right' },
  { name: 'Align Top', icon: <AlignTopIcon />, action: 'top' },
  {
    name: 'Align Vertically',
    icon: <AlignVerticalIcon />,
    action: 'vertically',
  },
  { name: 'Align Bottom', icon: <AlignBottomIcon />, action: 'bottom' },
];

export default function Alignment() {
  const { controller } = useEditorContext();

  const handleAlignment = (action: string) => {
    controller?.align(action);
  };

  return (
    <Wrap>
      {list.map((item) => (
        <Tooltip content={item.name}>
          <span className="iconn" onClick={() => handleAlignment(item.action)}>
            {item.icon}
          </span>
        </Tooltip>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
