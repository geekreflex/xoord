import { useEditorContext } from '@/context/EditorContext';
import Icon from '../shared/Icon';
import Tooltip from '../shared/Tooltip';

export default function Duplicate() {
  const { controller } = useEditorContext();
  return (
    <Tooltip content="Duplicate">
      <Icon name="copyIcon" click={() => controller?.duplicate()} />
    </Tooltip>
  );
}
