import { styled } from 'styled-components';
import Icon from './Icon';
import { capitalizeWord } from '@/utils/string';

interface DrawerProps {
  children: React.ReactNode;
  ml?: number;
  close: () => void;
  pos?: 'left' | 'right';
  title?: string;
  visible: boolean;
}

export default function Drawer({
  children,
  pos = 'left',
  ml = 0,
  close,
  title = 'Untitled',
  visible,
}: DrawerProps) {
  return (
    <DrawerWrap ml={ml} pos={pos} visible={visible.toString()}>
      <DrawerInner>
        <DrawerTop>
          <div className="title-close">
            <h3>{capitalizeWord(title)}</h3>
            <Icon name="close2Icon" click={close} hover={true} />
          </div>
        </DrawerTop>
        <DrawerMain>{children}</DrawerMain>
      </DrawerInner>
    </DrawerWrap>
  );
}

interface DW {
  ml: number;
  pos: string;
  visible: string;
}

const DrawerWrap = styled.div<DW>`
  position: fixed;
  width: 300px;
  top: 50;
  left: ${(props) => `${props.pos === 'left' ? props.ml : 'auto'}px`};
  right: ${(props) => `${props.pos === 'right' ? 0 : 'auto'}`};
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-right: 1px solid
    ${(props) =>
      props.pos === 'left' ? props.theme.colors.borderColor : 'transparent'};
  border-left: 1px solid
    ${(props) =>
      props.pos === 'right' ? props.theme.colors.borderColor : 'trnasparent'};
  z-index: 9998;
  display: ${(props) => (props.visible === 'true' ? 'flex' : 'none')};
  flex-direction: column;
`;

const DrawerInner = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const DrawerTop = styled.div`
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

const DrawerMain = styled.div`
  flex: 1;
  overflow-y: auto;
`;
