import { styled } from 'styled-components';
import { capitalizeWord } from '@/utils/string';
import { Close2Icon } from '@/icons';

interface DrawerProps {
  children: React.ReactNode;
  ml?: number;
  close: () => void;
  pos?: 'left' | 'right';
  title?: string;
  visible: boolean;
  pad?: number;
}

export default function Drawer({
  children,
  pos = 'left',
  ml = 0,
  close,
  title = 'Untitled',
  visible,
  pad = 10,
}: DrawerProps) {
  return (
    <DrawerWrap ml={ml} pos={pos} visible={visible.toString()}>
      <DrawerInner>
        <DrawerTop>
          <div className="title-close">
            <h3>{capitalizeWord(title)}</h3>
            <span className="close-drawer-icon" onClick={close}>
              <Close2Icon />
            </span>
          </div>
        </DrawerTop>
        <DrawerMain pad={pad}>{children}</DrawerMain>
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
  min-width: 200px;
  max-width: 400px;
  top: 60px;
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

const DrawerInner = styled.div<{ pad?: number }>`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const DrawerTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px;

  .title-close {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h3 {
      flex: 1;
      font-size: 18px;
      font-weight: 900;
    }
  }

  .close-drawer-icon {
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    color: #888;
    &:hover {
      color: #222;
    }
  }
`;

const DrawerMain = styled.div<{ pad?: number }>`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${(props) => `0px ${props.pad}px`};
  padding-top: 10px;
  width: 100%;
`;
