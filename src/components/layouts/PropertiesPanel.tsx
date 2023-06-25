import { styled } from 'styled-components';
import Panel from '../common/Panel';
import { useEditorContext } from '@/context/EditorContext';
import TextProperties from '../properties/TextProperties';
import ShapeProperties from '../properties/ShapeProperties';
import SelectionProperties from '../properties/SelectionProperties';

export default function PropertiesPanel() {
  const { selectedType } = useEditorContext();

  const renderProperties = () => {
    switch (selectedType) {
      case 'circle':
      case 'triangle':
      case 'polygon':
      case 'rect':
        return <ShapeProperties />;
      case 'textbox':
        return <TextProperties />;
      case 'selection':
        return <SelectionProperties />;
    }
  };

  return (
    <Panel title="Properties" placement="right" offset={20}>
      <Wrap>{renderProperties()}</Wrap>
    </Panel>
  );
}

const Wrap = styled.div``;
