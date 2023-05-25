import { useEditor } from '@/context/EditorContext';
import { Circle, Rectangle } from './toolbox';

export default function Tool() {
  const { tools } = useEditor();

  return (
    <div>
      {tools && (
        <div>
          <Circle tools={tools} />
          <Rectangle tools={tools} />
        </div>
      )}
    </div>
  );
}
