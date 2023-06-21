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
          <h4>{title}</h4>
          <button className="close-btn" onClick={close}>
            <Close2Icon />
          </button>
        </div>
        <LineX />
        <div className="main">{children}</div>
      </Wrap>
    </Drag>
  );
}

const Wrap = styled.div`
  position: fixed;
  right: 300px;
  bottom: 300px;
  z-index: 9999;
  background-color: ${(props) => props.theme.colors.primary};
  padding-bottom: 20px;
  border-radius: ${(props) => props.theme.radius.large};
  box-shadow: ${(props) => props.theme.shadow.shadow2};
  border: 1px solid ${(props) => props.theme.colors.borderColor};

  .draggable-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    padding-top: 10px;
    cursor: grab;

    h4 {
      font-size: 14px;
    }

    .close-btn {
      display: flex;
      padding: 5px;
      border: none;
      outline: none;
      cursor: pointer;
      position: relative;
      opacity: 0.5;
      background-color: transparent;
      color: ${(props) => props.theme.colors.textColor};

      &:hover {
        opacity: 1;
      }
    }
  }
`;
