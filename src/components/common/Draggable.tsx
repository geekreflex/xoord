import { Close2Icon } from '@/icons';
import { LineX } from '@/styles/global';
import Drag from 'react-draggable';
import { styled } from 'styled-components';

interface Props {
  children: React.ReactNode;
  handle?: string | '.handle';
  title: string;
  close: () => void;
}

export default function Draggable({ children, handle, title, close }: Props) {
  return (
    <Drag handle={handle || '.handle'}>
      <Wrap>
        <div className="draggable-header handle">
          <span className="draggable-title">{title}</span>
          <button className="close-btn" onClick={close}>
            <Close2Icon />
          </button>
        </div>
        <LineX />
        <div className="draggable-main">{children}</div>
      </Wrap>
    </Drag>
  );
}

const Wrap = styled.div`
  position: fixed;
  min-width: 220px;
  right: 280px;
  bottom: 50px;
  z-index: 9999;
  background-color: ${(props) => props.theme.colors.hoverActiveColor};
  padding-bottom: 20px;
  border-radius: ${(props) => props.theme.radius.small};
  box-shadow: ${(props) => props.theme.shadow.shadow2};
  border: 1px solid ${(props) => props.theme.colors.borderColor};

  .draggable-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    padding: 0 10px;
    padding-top: 10px;

    cursor: grab;
    .draggable-title {
      font-size: 14px;
      display: flex;
      font-weight: 600;
      line-height: 1;
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
      font-size: 14px;
      font-weight: 900;

      &:hover {
        opacity: 1;
      }
    }
  }
`;