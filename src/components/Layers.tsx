import { styled } from 'styled-components';
import Popup from './shared/Popup';
import { useState } from 'react';
import Tooltip from './shared/Tooltip';
import Icon from './shared/Icon';
import Tab from './shared/Tab';

export default function Layers() {
  const [visible, setVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('Layers');
  const tabs = [{ name: 'Layers' }, { name: 'Groups' }];

  return (
    <Wrap>
      {visible && (
        <Popup>
          <div className="layers-wrap">
            <Tab
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="main">
              {activeTab === 'Layers' && 'Layers'}
              {activeTab === 'Groups' && 'Groups'}
            </div>
          </div>
        </Popup>
      )}
      <Tooltip content="Layers and Groups">
        <Icon name="layerIcon" />
      </Tooltip>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  .layers-wrap {
    width: 300px;
    padding: 0 5px;
  }

  .main {
    padding: 5px;
  }
`;
