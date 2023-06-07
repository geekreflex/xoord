import Drawer from '@/components/common/Drawer';
import { useAppContext } from '@/context/AppContext';
import { styled } from 'styled-components';
import ElementsTool from './ElementsTool';
import CustomizeTool from './CustomizeTool';
import ImagesTool from './ImagesTool';
import TextTool from './TextTool';

export default function ToolsPanel() {
  const { toolPanel, closeToolPanel } = useAppContext();

  const handleClose = () => {
    closeToolPanel();
  };

  const renderTool = () => {
    switch (toolPanel) {
      case 'elements':
        return <ElementsTool />;
      case 'customize':
        return <CustomizeTool />;
      case 'images':
        return <ImagesTool />;
      case 'text':
        return <TextTool />;
      default:
        return null;
    }
  };

  return (
    <Drawer
      visible={!!toolPanel}
      ml={80}
      close={handleClose}
      title={toolPanel!}
    >
      <ToolsPanelWrap>{renderTool()}</ToolsPanelWrap>
    </Drawer>
  );
}

const ToolsPanelWrap = styled.div`
  width: 250px;
  padding-bottom: 30px;
`;
