import { styled } from 'styled-components';
import Icon from './Icon';

export default function Popup({
  children,
  title,
  close,
  head = true,
  pad = true,
  pos = 'bottom',
}: {
  children: React.ReactNode;
  title?: string;
  close?: () => void;
  head?: boolean;
  pad?: boolean;
  pos?: string;
}) {
  return (
    <PopupWrap pos={pos} pad={pad.toString()}>
      {head && (
        <div className="title-close">
          <h3>{title || 'Untitled'}</h3>
          <Icon name="close2Icon" click={close} />
        </div>
      )}
      <div className="main">{children}</div>
    </PopupWrap>
  );
}

interface PW {
  pad: string;
  pos: string;
}

const PopupWrap = styled.div<PW>`
  position: absolute;
  bottom: ${(props) => props.pos === 'bottom' && '50px'};
  top: ${(props) => props.pos === 'top' && '50px'};
  min-width: 100px;
  max-width: 600px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: ${(props) => (props.pad === 'true' ? '20px' : '8px 0')};
  border-radius: ${(props) => props.theme.radius.medium};
  box-shadow: ${(props) => props.theme.shadow.shadow1};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  z-index: 99998;

  .title-close {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
    padding-bottom: 5px;
  }
  .main {
    padding-top: 5px;
  }
`;
