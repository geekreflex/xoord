import Panel from '@/components/common/Panel';
import { useApp } from '@/context/AppContext';
import { styled } from 'styled-components';

export default function ToolsPanel() {
  const { toolPanel, closeToolPanel } = useApp();

  const handleClose = () => {
    closeToolPanel();
  };
  return (
    <Panel ml={80} close={handleClose}>
      <ToolsPanelWrap>
        <div>Tools Panel - {toolPanel}</div>
        {toolPanel && 'Hello'}
      </ToolsPanelWrap>
    </Panel>
  );
}

const ToolsPanelWrap = styled.div`
  background-color: ${(props) => props.theme.color};
`;
