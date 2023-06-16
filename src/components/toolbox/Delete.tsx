import { useEditorContext } from '@/context/EditorContext';
import Tooltip from '../shared/Tooltip';
import Icon from '../shared/Icon';

export default function Delete() {
  const { controller } = useEditorContext();
  return (
    <Tooltip content="Delete">
      <Icon name="trashIcon" click={() => controller?.delete()} />
    </Tooltip>
  );
}
