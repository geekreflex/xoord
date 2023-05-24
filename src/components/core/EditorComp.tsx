import { useEffect, useRef, useState } from 'react';
import { Editor } from './editor';
import { Tab } from './tab';
import WorkspaceComp from './WorkspaceComp';
import TabComp from './TabComp';

export default function EditorComp() {
  const editor = useRef<Editor>(new Editor());
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<Tab | null>(null);

  useEffect(() => {
    const initialTab = editor.current.addTab();
    setActiveTab(initialTab);
    setTabs(editor.current.getTabs());
  }, []);

  const addTab = () => {
    const newTab = editor.current.addTab();
    setTabs(editor.current.getTabs());
    setActiveTab(newTab);
  };

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    editor.current.switchTab(tab);
  };

  const closeTab = (tab: Tab) => {
    editor.current.closeTab(tab);
    setTabs(editor.current.getTabs());

    if (activeTab === tab) {
      setActiveTab(null);
    }
  };

  const renderTabs = () => {
    return tabs.map((tab) => (
      <TabComp
        key={tab.getId()}
        tab={tab}
        active={activeTab === tab}
        onClick={() => switchTab(tab)}
        onClose={() => closeTab(tab)}
      />
    ));
  };

  const renderActiveWorkspace = () => {
    if (activeTab) {
      const workspace = activeTab.getWorkspace();
      return <WorkspaceComp workspace={workspace} />;
    }
    return null;
  };

  return (
    <div>
      <div>{renderTabs()}</div>
      <div>{renderActiveWorkspace()}</div>
      <div>
        <button onClick={addTab}>Add Tab</button>
      </div>
    </div>
  );
}
