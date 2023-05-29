import Panel from '@/components/common/Panel';
import { useAppContext } from '@/context/AppContext';
import { styled } from 'styled-components';
import ElementsTool from './ElementsTool';

export default function ToolsPanel() {
  const { toolPanel, closeToolPanel } = useAppContext();

  const handleClose = () => {
    closeToolPanel();
  };

  const renderTool = () => {
    switch (toolPanel) {
      case 'elements':
        return <ElementsTool />;
      default:
        return null;
    }
  };

  return (
    <Panel visible={!!toolPanel} ml={80} close={handleClose} title={toolPanel!}>
      <ToolsPanelWrap>{renderTool()}</ToolsPanelWrap>
    </Panel>
  );
}

const ToolsPanelWrap = styled.div``;
