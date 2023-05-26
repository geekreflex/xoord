import { useEditor } from '@/context/EditorContext';
import { Circle, Rectangle } from './shapes';

export default function Shapes() {
  const { shapes } = useEditor();

  return (
    <>
      {' '}
      {shapes && (
        <div>
          <Circle shapes={shapes} />
          <Rectangle shapes={shapes} />
        </div>
      )}
    </>
  );
}
