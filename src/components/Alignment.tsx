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

const list = [
  { name: 'Align Left', icon: <AlignLeftIcon /> },
  { name: 'Align Horizontally', icon: <AlignHorizontalIcon /> },
  { name: 'Align Right', icon: <AlignRightIcon /> },
  { name: 'Align Top', icon: <AlignTopIcon /> },
  { name: 'Align Vertically', icon: <AlignVerticalIcon /> },
  { name: 'Align Bottom', icon: <AlignBottomIcon /> },
];

export default function Alignment() {
  return (
    <Wrap>
      {list.map((item) => (
        <Tooltip content={item.name}>
          <div>
            <span className="iconn">{item.icon}</span>
          </div>
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
