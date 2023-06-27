import {
  BackwardIcon,
  BringFrontIcon,
  ForwardIcon,
  SendBackIcon,
} from '@/icons';
import { TitleSmall } from '@/styles/global';
import { styled } from 'styled-components';
import Tooltip from './common/Tooltip';

export default function ObjectLayer() {
  const items = [
    { name: 'Bring Forward', icon: <ForwardIcon />, action: 'left' },
    { name: 'Send Backwards', icon: <BackwardIcon />, action: 'left' },
    { name: 'Bring to front', icon: <BringFrontIcon />, action: 'left' },
    { name: 'Send to back', icon: <SendBackIcon />, action: 'left' },
  ];

  return (
    <Wrap>
      <TitleSmall>Object Layer</TitleSmall>
      <div className="obj-layer-wrap">
        {items.map((item) => (
          <div className="obj-layer-item">
            <Tooltip key={item.name} content={item.name}>
              <button className="iconn">{item.icon}</button>
            </Tooltip>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  .obj-layer-wrap {
    display: flex;
    gap: 10px;
  }

  .obj-layer-item {
  }
`;
