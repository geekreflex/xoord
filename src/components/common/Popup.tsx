import { styled } from 'styled-components';
import Icon from './Icon';

export default function Popup({
  children,
  title,
  close,
}: {
  children: React.ReactNode;
  title: string;
  close?: () => void;
}) {
  return (
    <PopupWrap>
      <div className="title-close">
        <h3>{title || 'Untitled'}</h3>
        <Icon name="close2Icon" click={close} />
      </div>
      <div className="main">{children}</div>
    </PopupWrap>
  );
}

const PopupWrap = styled.div`
  position: absolute;
  bottom: 50px;
  min-width: 100px;
  max-width: 600px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 20px;
  border-radius: ${(props) => props.theme.radius.medium};
  box-shadow: ${(props) => props.theme.shadow.shadow1};
  border: 1px solid ${(props) => props.theme.colors.borderColor};

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
