import { useAppSelector } from '@/app/hooks';
import ResizeTemplate from '../ResizeTemplate';

export default function Over() {
  const { resizeTemplateModal } = useAppSelector((state) => state.app);
  return <>{resizeTemplateModal && <ResizeTemplate />}</>;
}
