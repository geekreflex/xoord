import { styled } from 'styled-components';
import Modal from './common/Modal';
import { useAppDispatch } from '@/app/hooks';
import { toggleDownloadModal } from '@/features/appSlice';
import DesignPreview from './DesignPreview';

export default function DownloadModal() {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(toggleDownloadModal(false));
  };

  return (
    <Modal close={handleClose} title="Download">
      <Wrap>
        <section className="preview-wrap">
          <DesignPreview />
        </section>
        <section className="download-options">Download Options</section>
      </Wrap>
    </Modal>
  );
}

const Wrap = styled.div`
  width: 800px;
  padding: 20px;
  display: flex;

  section {
    flex: 1;
  }
`;
