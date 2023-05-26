import { useEditor } from '@/context/EditorContext';
import { Circle, Rectangle } from './toolbox/shapes';

export default function Tool() {
  const { shapes } = useEditor();

  return (
    <div>
      {shapes && (
        <div>
          <Circle shapes={shapes} />
          <Rectangle shapes={shapes} />
        </div>
      )}
    </div>
  );
}
