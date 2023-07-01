import { useAppSelector } from '@/app/hooks';
import ResizeModal from '../ResizeModal';
import DownloadModal from '../DownloadModal';

export default function Over() {
  const { resizeModal, downloadModal } = useAppSelector((state) => state.app);
  return (
    <>
      {resizeModal && <ResizeModal />}
      {downloadModal && <DownloadModal />}
    </>
  );
}
