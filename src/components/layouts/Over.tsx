import { useAppSelector } from '@/app/hooks';
import ResizeModal from '../ResizeModal';
import DownloadModal from '../DownloadModal';
import { styled } from 'styled-components';

/**
 *
 * This components holds things like modal
 * Basically components that are fixed
 */

export default function Over() {
  const { resizeModal, downloadModal } = useAppSelector((state) => state.app);
  return (
    <Wrap>
      {resizeModal && <ResizeModal />}
      {downloadModal && <DownloadModal />}
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  z-index: 999998;
`;
