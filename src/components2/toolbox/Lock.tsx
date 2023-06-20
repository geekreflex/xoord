import { useEditorContext } from '@/context/EditorContext';
import Icon from '../shared/Icon';
import Tooltip from '../shared/Tooltip';

export default function Lock() {
  const { controller } = useEditorContext();

  return (
    <>
      <Tooltip content="Lock">
        <Icon name="lockIcon" click={() => controller?.lock()} />
      </Tooltip>
    </>
  );
}
