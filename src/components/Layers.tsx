import { styled } from 'styled-components';
import Popup from './shared/Popup';
import { useRef, useState } from 'react';
import Tooltip from './shared/Tooltip';
import Icon from './shared/Icon';
import Tab from './shared/Tab';
import useClickOutside from '@/hooks/useClickOutside';

export default function Layers() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Layers');
  const tabs = [{ name: 'Layers' }, { name: 'Groups' }];
  const ref = useRef(null);

  useClickOutside(ref, () => setVisible(false));

  return (
    <Wrap ref={ref}>
      <div className="layer-group-wrap">
        {visible && (
          <Popup placement="bottom">
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
      </div>
      <Tooltip content="Layers and Groups">
        <Icon name="layerIcon" click={() => setVisible(true)} />
      </Tooltip>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;

  .layers-wrap {
    width: 300px;
    padding: 0 5px;
  }

  .main {
    padding: 5px;
  }
`;
