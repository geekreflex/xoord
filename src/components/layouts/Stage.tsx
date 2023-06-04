import { styled } from 'styled-components';
import Canvas from '../Canvas';
import { useAppSelector } from '@/app/hooks';
import ResizeTemplate from '../ResizeTemplate';

export default function Stage() {
  const { resizeTemplateModal } = useAppSelector((state) => state.app);
  return (
    <>
      <Scene>
        <Canvas />
      </Scene>
      {resizeTemplateModal && <ResizeTemplate />}
    </>
  );
}

const Scene = styled.div`
  flex: 1;
  width: calc(100% - 80px);
`;
