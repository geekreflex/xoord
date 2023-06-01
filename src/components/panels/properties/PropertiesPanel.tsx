import Drawer from '@/components/common/Drawer';
import { useEditorContext } from '@/context/EditorContext';
import { ObjectTypes } from '@/types/editor';
import ElementProperties from './ElementProperties';
import { styled } from 'styled-components';
import Selection from './Selection';
import PropertieTab from './PropertiesTab';
import { useState } from 'react';
import { IconName } from '@/types/icons';

export default function PropertiesPanel() {
  const [activeTab, setActiveTab] = useState('fill-stroke');
  const { selectedType, selectedObjects, clearSelectedObjects } =
    useEditorContext();
  interface TabProps {
    name: string;
    alias: string;
    icon: IconName;
  }
  const tabList: TabProps[] = [
    { name: 'Fill & Stroke', alias: 'fill-stroke', icon: 'brush2Icon' },
    { name: 'Align & Position', alias: 'position', icon: 'positionIcon' },
    { name: 'Shadows & Filters', alias: 'filter', icon: 'shadowIcon' },
  ];

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
      pad={0}
    >
      <Wrap>
        <Main>{RenderPanel()}</Main>
        <PropertieTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabList={tabList}
        />
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
  width: 300px;
  padding: 0 10px;
`;
