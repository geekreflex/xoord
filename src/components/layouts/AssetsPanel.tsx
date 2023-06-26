import { styled } from 'styled-components';
import Panel from '../common/Panel';
import { useAppSelector } from '@/app/hooks';
import ElementsTool from '../tools/ElementsTool';
import TextTool from '../tools/TextTool';
import LayerTool from '../tools/LayerTool';
import ImagesTool from '../tools/ImagesTool';
import BackgroundTool from '../tools/BackgroundTool';

export default function AssetsPanel() {
  const { activeTool } = useAppSelector((state) => state.app);

  function renderToolAsset() {
    switch (activeTool) {
      case 'Elements':
        return <ElementsTool />;
      case 'Images':
        return <ImagesTool />;
      case 'Text':
        return <TextTool />;
      case 'Backgrounds':
        return <BackgroundTool />;
      case 'Layers':
        return <LayerTool />;
    }
  }

  return (
    <Panel title={activeTool} placement="left" offset={85}>
      <Wrap>{renderToolAsset()}</Wrap>
    </Panel>
  );
}

const Wrap = styled.div``;
