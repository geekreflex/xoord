import Drawer from '@/components/common/Drawer';
import { useEditorContext } from '@/context/EditorContext';
import { ObjectTypes } from '@/types/editor';
import ElementProperties from './ElementProperties';
import { styled } from 'styled-components';
import Selection from './Selection';

export default function PropertiesPanel() {
  const { selectedType, selectedObjects, clearSelectedObjects } =
    useEditorContext();

  const onClosePropertyPanel = () => {
    clearSelectedObjects();
  };

  const renderTitle = () => {
    if (
      selectedType === ObjectTypes.Circle ||
      selectedType === ObjectTypes.Rectangle ||
      selectedType === ObjectTypes.Triangle ||
      selectedType === ObjectTypes.Polygon
    ) {
      return 'Edit Element';
    } else if (selectedType === ObjectTypes.Selection) {
      return 'Edit Selection';
    }
  };

  const RenderPanel = () => {
    switch (selectedType) {
      case ObjectTypes.Circle:
      case ObjectTypes.Polygon:
      case ObjectTypes.Rectangle:
      case ObjectTypes.Triangle:
        return <ElementProperties />;
      case ObjectTypes.Selection:
        return <Selection />;
      default:
        return '';
    }
  };

  return (
    <Drawer
      visible={!!selectedObjects}
      close={onClosePropertyPanel}
      pos="right"
      title={renderTitle()}
    >
      <Wrap>{RenderPanel()}</Wrap>
    </Drawer>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 300px;
`;
