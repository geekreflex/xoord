import { styled } from 'styled-components';
import Modal from './shared/Modal';

export default function Settings() {
  return (
    <Modal>
      <Wrap>
        <p>Hello from settings modal</p>
      </Wrap>
    </Modal>
  );
}

const Wrap = styled.div``;
