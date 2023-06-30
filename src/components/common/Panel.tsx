import { LineX } from '@/styles/global';
import { IoClose } from 'react-icons/io5';
import { styled } from 'styled-components';

interface PanelProps {
  children: React.ReactNode;
  title?: string | null;
  close?: () => void;
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
        <button className="close-btn" onClick={close}>
          <IoClose />
        </button>
      </div>
      <LineX margin={0} />
      <div className="panel-main">{children}</div>
    </Wrap>
  );
}

const Wrap = styled.div<{ placement: string; offset: number }>`
  width: 250px;
  height: 95vh;
  top: 50%;
  left: ${(props) =>
    props.placement === 'left' ? `${props.offset}px` : 'auto'};
  right: ${(props) =>
    props.placement === 'right' ? `${props.offset}px` : 'auto'};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.small};
  z-index: 98;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.borderColor};

  .panel-header {
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: space-between;
    padding: 0 10px;

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
    margin: 20px 0;
    padding: 0 10px;
  }

  .close-btn {
    display: flex;
    padding: 5px;
    border: none;
    outline: none;
    height: 100%;
    cursor: pointer;
    position: relative;
    opacity: 0.5;
    background-color: transparent;
    color: ${(props) => props.theme.colors.textColor};
    align-items: center;
    font-size: 16px;
    font-weight: 900;

    &:hover {
      opacity: 1;
    }
  }
`;
