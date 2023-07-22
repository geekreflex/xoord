import Bottom from './Bottom';
import ContextMenu from './ContextMenu';
import DropArea from './DropArea';
import PropsPanel from './PropsPanel';
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
    </>
  );
}
