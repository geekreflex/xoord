import Drawer from '@/components/common/Drawer';
import { useEditorContext } from '@/context/EditorContext';
import { ObjectTypes } from '@/types/editor';
import { styled } from 'styled-components';
import Selection from './Selection';
import CircleProperties from './CircleProperties';
import PolygonProperties from './PolygonProperties';
import RectangleProperties from './RectangleProperties';
import TriangleProperties from './TriangleProperties';
import TextProperties from './TextProperties';

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
        return <CircleProperties />;
      case ObjectTypes.Polygon:
        return <PolygonProperties />;
      case ObjectTypes.Rectangle:
        return <RectangleProperties />;
      case ObjectTypes.Triangle:
        return <TriangleProperties />;
      case ObjectTypes.Text:
        return <TextProperties />;
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
      pad={0}
    >
      <Wrap>
        <Main>{RenderPanel()}</Main>
      </Wrap>
    </Drawer>
  );
}

const Wrap = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 320px;
  padding: 0 10px;
`;
