import { styled } from 'styled-components';
import Editor from './Editor';
import { useEffect, useState } from 'react';
import { generateUniqueId } from '@/utils/unique';
import TabList from './TabList';

export interface Tab {
  title: string;
  id: string;
}

export default function Main() {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<Tab | null>(null);

  const newView = () => {
    const id = generateUniqueId();
    const canvasId = `canvas-${id}`;
    const tab = { title: 'Untitled', id: canvasId };
    setTabs([tab, ...tabs]);
    setActiveTab(tab);
  };

  return (
    <Wrap>
      <div>
        <button onClick={newView}>New View</button>
      </div>
      <div className="editor-view">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`view ${
                activeTab?.id === tab.id ? 'active-view' : ''
              }`}
            >
              <Editor id={tab.id} />
            </div>
          );
        })}
      </div>
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <button
            onClick={() => setActiveTab(tab)}
            title={`${tab.title}-${tab.title}`}
            className={`tab ${activeTab?.id === tab.id ? 'active' : ''}`}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .editor-view {
    width: 100%;
    flex: 1;
    border: 1px solid blue;
  }

  .view {
    visibility: hidden;
    position: absolute;
    opacity: 0;
    top: 0;
    z-index: -999;
    height: 100%;
  }

  .active-view {
    visibility: visible;
    position: static;
    opacity: 1;
    z-index: auto;
  }
`;
