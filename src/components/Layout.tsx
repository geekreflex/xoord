import DropArea from './DropArea';
import PropsPanel from './PropsPanel';
import Toolbar from './Toolbar';
import Workspace from './Workspace';

export default function Layout() {
  return (
    <>
      <Toolbar />
      <Workspace />
      <PropsPanel />
      <DropArea />
    </>
  );
}
