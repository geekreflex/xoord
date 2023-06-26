import { styled } from 'styled-components';
import Panel from '../common/Panel';
import TextProperties from '../properties/TextProperties';
import ShapeProperties from '../properties/ShapeProperties';
import SelectionProperties from '../properties/SelectionProperties';
import ImageProperties from '../properties/ImageProperties';
import { useAppSelector } from '@/app/hooks';
import BackgroundProperties from '../properties/BackgroundProperties';

export default function PropertiesPanel() {
  const { propPanel } = useAppSelector((state) => state.app);

  const renderProperties = () => {
    switch (propPanel) {
      case 'circle':
      case 'triangle':
      case 'polygon':
      case 'rect':
        return <ShapeProperties />;
      case 'textbox':
        return <TextProperties />;
      case 'image':
        return <ImageProperties />;
      case 'selection':
        return <SelectionProperties />;
      case 'background':
        return <BackgroundProperties />;
    }
  };

  return (
    <Panel title="Properties" placement="right" offset={20}>
      <Wrap>{renderProperties()}</Wrap>
    </Panel>
  );
}

const Wrap = styled.div``;
