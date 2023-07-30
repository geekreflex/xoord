import Bottom from './Bottom';
import ContextMenu from './ContextMenu';
import DropArea from './DropArea';
import ExportDesign from './ExportDesign';
import Help from './Help';
import PropsPanel from './PropsPanel';
import Settings from './Settings';
import Toolbar from './Toolbar';
import Unfinished from './Unfinished';
import Workspace from './Workspace';

export default function Layout() {
  return (
    <>
      <Toolbar />
      <Workspace />
      <PropsPanel />
      <DropArea />
      <ContextMenu />
      <Bottom />
      <Unfinished />
      <ExportDesign />
      <Help />
      <Settings />
    </>
  );
}
