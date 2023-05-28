import { styled } from 'styled-components';
import Icon from './Icon';

interface PanelProps {
  children: React.ReactNode;
  ml?: number;
  close: () => void;
  pos?: 'left' | 'right';
}

export default function Panel({
  children,
  pos = 'left',
  ml = 0,
  close,
}: PanelProps) {
  return (
    <PanelWrap ml={ml} pos={pos}>
      <PanelTop>
        <div className="title-close">
          <h3>{'Elements'}</h3>
          <Icon name="close2Icon" click={close} hover={true} />
        </div>
      </PanelTop>
      <div className="panel-main">{children}</div>
    </PanelWrap>
  );
}

interface PW {
  ml: number;
  pos: string;
}

const PanelWrap = styled.div<PW>`
  position: fixed;
  width: 250px;
  top: 50px;
  left: ${(props) => `${props.pos === 'left' ? props.ml : 'auto'}px`};
  right: ${(props) => `${props.pos === 'right' ? 0 : 'auto'}`};
  height: 100%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 10px 5px;
  z-index: 9998;
`;

const PanelTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .title-close {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h3 {
      flex: 1;
    }
  }
`;
