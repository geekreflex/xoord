import { styled } from 'styled-components';
import Panel from '../common/Panel';
import { useEditorContext } from '@/context/EditorContext';
import CircleProperties from '../properties/CircleProperties';
import TextProperties from '../properties/TextProperties';

export default function PropertiesPanel() {
  const { selectedType } = useEditorContext();

  const renderProperties = () => {
    switch (selectedType) {
      case 'circle':
        return <CircleProperties />;
      case 'textbox':
        return <TextProperties />;
    }
  };

  return (
    <Panel title="Properties" placement="right" offset={20}>
      <Wrap>{renderProperties()}</Wrap>
    </Panel>
  );
}

const Wrap = styled.div``;
