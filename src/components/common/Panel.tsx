import { styled } from 'styled-components';
import Icon from './Icon';

interface PanelProps {
  children: React.ReactNode;
  ml?: number;
  close: () => void;
  pos?: 'left' | 'right';
  title?: string;
  visible: boolean;
}

export default function Panel({
  children,
  pos = 'left',
  ml = 0,
  close,
  title = 'Untitled',
  visible,
}: PanelProps) {
  return (
    <PanelWrap ml={ml} pos={pos} visible={visible.toString()}>
      <PanelTop>
        <div className="title-close">
          <h3>{title}</h3>
          <Icon name="close2Icon" click={close} hover={true} />
        </div>
      </PanelTop>
      <PanelMain>{children}</PanelMain>
    </PanelWrap>
  );
}

interface PW {
  ml: number;
  pos: string;
  visible: string;
}

const PanelWrap = styled.div<PW>`
  position: fixed;
  width: 250px;
  top: 50;
  left: ${(props) => `${props.pos === 'left' ? props.ml : 'auto'}px`};
  right: ${(props) => `${props.pos === 'right' ? 0 : 'auto'}`};
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 10px 5px;
  z-index: 9998;
  display: ${(props) => (props.visible === 'true' ? 'flex' : 'none')};
  flex-direction: column;
`;

const PanelTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

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

const PanelMain = styled.div`
  flex: 1;
  overflow-y: auto;
`;
