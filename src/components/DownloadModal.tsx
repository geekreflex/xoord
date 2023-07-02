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
    <Modal close={handleClose}>
      <Wrap>
        <section className="preview-wrap">
          <DesignPreview />
        </section>
        <section className="download-options">
          <div className="title">
            <h3>Save to Computer</h3>
          </div>
          <div className="options-wrap"></div>
        </section>
      </Wrap>
    </Modal>
  );
}

const Wrap = styled.div`
  width: 1000px;
  max-width: 100%;
  display: flex;
  height: 100%;

  .preview-wrap {
    width: 60%;
  }

  section {
    padding: 20px;
  }

  .download-options {
    border-left: 1px solid ${(props) => props.theme.colors.borderColor};
  }
`;
