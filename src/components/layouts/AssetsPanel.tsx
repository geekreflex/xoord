import { styled } from 'styled-components';
import Panel from '../common/Panel';
import { useAppSelector } from '@/app/hooks';
import Elements from '../tools/Elements';

export default function AssetsPanel() {
  const { activeTool } = useAppSelector((state) => state.app);

  function renderToolAsset() {
    switch (activeTool) {
      case 'Elements':
        return <Elements />;
    }
  }

  return (
    <Panel title={activeTool} placement="left" offset={85}>
      <Wrap>{renderToolAsset()}</Wrap>
    </Panel>
  );
}

const Wrap = styled.div`
  padding: 0 10px;
`;
