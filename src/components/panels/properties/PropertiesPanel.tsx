import Panel from '@/components/common/Drawer';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect } from 'react';

export default function PropertiesPanel() {
  const { editor, selectedType, selectedObjects, clearSelectedObjects } =
    useEditorContext();

  const onClosePropertyPanel = () => {
    clearSelectedObjects();
  };

  useEffect(() => {
    console.log(selectedObjects?.length);
    console.log(selectedObjects);
  }, [selectedObjects]);

  return (
    <Panel visible={!!selectedObjects} close={onClosePropertyPanel} pos="right">
      <div>Property panel</div>
      <div>{selectedType}</div>
      {selectedObjects?.length}
    </Panel>
  );
}
