import Panel from '@/components/common/Drawer';
import { useEditorContext } from '@/context/EditorContext';

export default function PropertiesPanel() {
  const { editor, selectedObjects } = useEditorContext();

  const onClosePropertyPanel = () => {
    console.log(close);
  };

  return (
    <Panel visible={!!selectedObjects} close={onClosePropertyPanel} pos="right">
      <div>Property panel</div>
      {selectedObjects?.length}
    </Panel>
  );
}
