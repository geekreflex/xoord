import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { PANEL_WIDTH } from '@/utils/constants';
import { styled } from 'styled-components';
import ToolsPanel from '../tools/ToolsPanel';
import { ArrowLeftIcon, HandleIcon } from '@/icons';
import { closePanel } from '@/features/appSlice';

export default function Panel() {
  const dispatch = useAppDispatch();
  const { layout, panel, isPanelOpen, panelTitle } = useAppSelector(
    (state) => state.app
  );

  const onClosePanel = () => {
    dispatch(closePanel());
  };

  return (
    <Wrap width={PANEL_WIDTH} layout={layout} open={isPanelOpen}>
      <div className="panel-header">
        <h3>{panelTitle}</h3>
      </div>
      <div className="panel-main">{panel === 'tools' && <ToolsPanel />}</div>
      <div className="handle" onClick={onClosePanel}>
        <HandleIcon />
        <span className="icon">
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
  background-color: ${(props) => props.theme.colors.panelBg};
  border-right: 1px solid
    ${(props) =>
      props.layout === 'left' ? props.theme.colors.borderColor : 'none'};
  border-left: 1px solid
    ${(props) =>
      props.layout === 'right' ? props.theme.colors.borderColor : 'none'};
  order: ${(props) => (props.layout === 'right' ? 1 : 2)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  border: ${(props) => (props.open === false ? 'none' : 'auto')};
  z-index: 99;
  display: flex;
  flex-direction: column;

  .panel-main {
    height: 100%;
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    padding: 0 5px;
  }

  .handle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.panelBg};
    cursor: pointer;

    .icon {
      position: absolute;
      color: ${(props) => props.theme.colors.textColor};
      display: flex;
      font-size: 12px;

      svg,
      path {
        stroke-width: 4px;
      }
    }
  }
`;
