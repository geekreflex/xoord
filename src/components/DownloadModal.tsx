import { styled } from 'styled-components';
import Modal from './common/Modal';

export default function DownloadModal() {
  const handleClose = () => {};

  return (
    <Modal close={handleClose}>
      <Wrap></Wrap>
    </Modal>
  );
}

const Wrap = styled.div``;
