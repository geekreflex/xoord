import { styled } from 'styled-components';

export default function Modal() {
  return (
    <ModalWrap>
      <Overlay />
      <ModalInner>
        <div className="modal-header"></div>

        <div className="main"></div>
      </ModalInner>
    </ModalWrap>
  );
}

const ModalWrap = styled.div``;
const Overlay = styled.div``;
const ModalInner = styled.div``;
