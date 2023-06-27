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
  return (
    <Wrap>
      <TitleSmall>Object Layer</TitleSmall>
      <div className="obj-layer-wrap">
        <Tooltip content={'Bring Front'}>
          <button className="iconn">
            <BringFrontIcon />
          </button>
        </Tooltip>
        <Tooltip content={'Bring Front'}>
          <button className="iconn">
            <ForwardIcon />
          </button>
        </Tooltip>
        <Tooltip content={'Bring Front'}>
          <button className="iconn">
            <SendBackIcon />
          </button>
        </Tooltip>
        <Tooltip content={'Bring Front'}>
          <button className="iconn">
            <BackwardIcon />
          </button>
        </Tooltip>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  .obj-layer-wrap {
    display: flex;
  }
`;
