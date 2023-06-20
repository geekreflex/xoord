import { Close2Icon } from '@/icons';
import { styled } from 'styled-components';

interface PanelProps {
  children: React.ReactNode;
  title?: string | null;
  close?: () => {};
  placement?: 'left' | 'right';
  offset?: number;
}

export default function Panel({
  children,
  title = 'Untitled',
  close,
  placement = 'left',
  offset = 20,
}: PanelProps) {
  return (
    <Wrap placement={placement} offset={offset}>
      <div className="panel-header">
        <h3>{title}</h3>
        <span onClick={close}>
          <Close2Icon />
        </span>
      </div>
      {/* <LineX /> */}
      <div className="panel-main">{children}</div>
    </Wrap>
  );
}

const Wrap = styled.div<{ placement: string; offset: number }>`
  position: fixed;
  width: 250px;
  height: 90vh;
  top: 50%;
  left: ${(props) =>
    props.placement === 'left' ? `${props.offset}px` : 'auto'};
  right: ${(props) =>
    props.placement === 'right' ? `${props.offset}px` : 'auto'};
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.medium};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  z-index: 98;
  display: flex;
  flex-direction: column;

  .panel-header {
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 10px;

    h3 {
      font-weight: 600;
      font-size: 16px;
    }

    span {
      display: flex;
      cursor: pointer;
      padding: 5px;
    }
  }

  .panel-main {
    height: 100%;
    overflow-y: auto;
  }
`;
