import { Workspace } from './workspace';

export class Tab {
  private id: string;
  private name: string;
  private workspace: Workspace;

  constructor(id: string, name: string, workspace: Workspace) {
    this.id = id;
    this.name = name;
    this.workspace = workspace;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getWorkspace(): Workspace {
    return this.workspace;
  }
}
