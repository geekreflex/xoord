import { fabric } from 'fabric';
import { Tab } from './tab';
import { generateUniqueId } from '@/utils/unique';
import { Workspace } from './workspace';

export class Editor {
  private tabs: Tab[];
  private activeTab: Tab | null;

  constructor() {
    this.tabs = [];
    this.activeTab = null;
  }

  addTab(): Tab {
    const workspaceId = generateUniqueId();
    const canvas = new fabric.Canvas(`workspace-${workspaceId}`);
    const workspace = new Workspace(workspaceId, canvas);
    const tab = new Tab(workspaceId, 'Untitled', workspace);

    this.tabs.push(tab);
    return tab;
  }

  switchTab(tab: Tab) {
    this.activeTab = tab;
  }

  closeTab(tab: Tab) {
    const tabIndex = this.tabs.indexOf(tab);
    if (tabIndex > -1) {
      this.tabs.splice(tabIndex, 1);
    }

    if (this.activeTab === tab) {
      this.activeTab = null;
    }
  }

  getTabs(): Tab[] {
    return this.tabs;
  }

  getActiveTab(): Tab | null {
    return this.activeTab;
  }
}
