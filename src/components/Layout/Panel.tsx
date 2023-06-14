import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { PANEL_WIDTH } from '@/utils/constants';
import { styled } from 'styled-components';
import ToolsPanel from '../tools/ToolsPanel';
import { ArrowLeftIcon } from '@/icons';
import { closePanel } from '@/features/appSlice';

export default function Panel() {
  const dispatch = useAppDispatch();
  const { layout, panel, isPanelOpen } = useAppSelector((state) => state.app);

  const onClosePanel = () => {
    dispatch(closePanel());
  };

  return (
    <Wrap width={PANEL_WIDTH} layout={layout} open={isPanelOpen}>
      <div className="panel-header">
        <h3>Untitled</h3>
      </div>
      <div className="panel-main">
        {panel === 'tools' && <ToolsPanel />}
        {panel === 'properties' && 'Props'}
      </div>
      <div className="panel-handle" onClick={onClosePanel}>
        <span>
          <ArrowLeftIcon />
        </span>
      </div>
    </Wrap>
  );
}

interface WrapProps {
  width: number;
  layout: string;
  open: boolean;
}

const Wrap = styled.div<WrapProps>`
  position: relative;
  width: ${(props) => (props.open ? `${props.width}px` : 0)};
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-right: 1px solid
    ${(props) =>
      props.layout === 'left' ? props.theme.colors.borderColor : 'none'};
  border-left: 1px solid
    ${(props) =>
      props.layout === 'right' ? props.theme.colors.borderColor : 'none'};
  padding: ${(props) => (props.open ? '5px' : 0)};
  order: ${(props) => (props.layout === 'right' ? 1 : 2)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  border: ${(props) => (props.open === false ? 'none' : 'auto')};

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }

  .panel-handle {
    position: absolute;
    width: 15px;
    height: 80px;
    background-color: ${(props) => props.theme.colors.primary};
    right: -14px;
    top: 50%;
    transform: translateY(-50%);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-left: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 98;

    span {
      display: flex;
    }
    &:hover {
      span {
        opacity: 0.6;
      }
    }
  }
`;
