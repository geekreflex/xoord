import Panel from '@/components/common/Panel';
import { useApp } from '@/context/AppContext';

export default function PropertiesPanel() {
  const { closePropertyPanel } = useApp();

  const onClosePropertyPanel = () => {
    closePropertyPanel();
  };

  return (
    <Panel close={onClosePropertyPanel} pos="right">
      <div>Property panel</div>
    </Panel>
  );
}
