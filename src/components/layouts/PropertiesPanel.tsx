import { styled } from 'styled-components';
import Panel from '../common/Panel';
import TextProperties from '../properties/TextProperties';
import ShapeProperties from '../properties/ShapeProperties';
import SelectionProperties from '../properties/SelectionProperties';
import ImageProperties from '../properties/ImageProperties';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import BackgroundProperties from '../properties/BackgroundProperties';
import { useEditorContext } from '@/context/EditorContext';
import { switchPropertyPanel } from '@/features/appSlice';

export default function PropertiesPanel() {
  const dispatch = useAppDispatch();
  const { clearSelectedObjects } = useEditorContext();
  const { propPanel } = useAppSelector((state) => state.app);

  const renderProperties = () => {
    switch (propPanel) {
      case 'circle':
      case 'triangle':
      case 'polygon':
      case 'rect':
      case 'line':
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

  const handleClose = () => {
    clearSelectedObjects();
    dispatch(switchPropertyPanel(null));
  };

  return (
    <Panel title="Properties" placement="right" offset={20} close={handleClose}>
      <Wrap>{renderProperties()}</Wrap>
    </Panel>
  );
}

const Wrap = styled.div``;
