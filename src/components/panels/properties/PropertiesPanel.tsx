import Panel from '@/components/common/Drawer';
import { useEditorContext } from '@/context/EditorContext';
import { ObjectTypes } from '@/types/editor';
import { useEffect } from 'react';
import ElementProperties from './ElementProperties';

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

  const renderTitle = () => {
    if (
      selectedType === ObjectTypes.Circle ||
      selectedType === ObjectTypes.Rectangle
    ) {
      return 'Elements';
    }
  };

  const RenderPanel = () => {
    switch (selectedType) {
      case ObjectTypes.Circle ||
        ObjectTypes.Polygon ||
        ObjectTypes.Rectangle ||
        ObjectTypes.Triangle:
        return <ElementProperties />;
      default:
        return '';
    }
  };

  return (
    <Panel
      visible={!!selectedObjects}
      close={onClosePropertyPanel}
      pos="right"
      title={renderTitle()}
    >
      <div>Property panel</div>
      <div>{selectedType}</div>
      {selectedObjects?.length}
      {RenderPanel()}
    </Panel>
  );
}
