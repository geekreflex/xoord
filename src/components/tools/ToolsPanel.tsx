import { styled } from 'styled-components';
import ElementsTool from './ElementsTool';
import { useAppSelector } from '@/app/hooks';
import ImagesTool from './ImagesTools';
import TextTool from './TextTool';
import CustomizeTool from './CustomizeTool';
import DrawTool from './DrawTool';
import TemplatesTool from './TemplatesTool';

export default function ToolsPanel() {
  const { activeTool } = useAppSelector((state) => state.app);
  return (
    <Wrap>
      {activeTool === 'elements' && <ElementsTool />}
      {activeTool === 'images' && <ImagesTool />}
      {activeTool === 'text' && <TextTool />}
      {activeTool === 'templates' && <TemplatesTool />}
      {activeTool === 'draw' && <DrawTool />}
      {activeTool === 'customize' && <CustomizeTool />}
    </Wrap>
  );
}

const Wrap = styled.div``;
