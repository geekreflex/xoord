import { styled } from 'styled-components';
import Tab from '../common/Tab';
import { useState } from 'react';

export default function LayerTool() {
  const [activeTab, setActiveTab] = useState('Layer');
  const tabList = [{ name: 'Layer' }, { name: 'Groups' }];
  return (
    <Wrap>
      <div>
        <Tab tabs={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;
