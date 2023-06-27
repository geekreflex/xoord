import { useAppSelector } from '@/app/hooks';
import ResizeModal from '../ResizeModal';

export default function Over() {
  const { resizeModal } = useAppSelector((state) => state.app);
  return <>{resizeModal && <ResizeModal />}</>;
}
