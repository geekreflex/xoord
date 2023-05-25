import { useEditor } from '@/context/Editor';
import { Circle, Rectangle } from './toolbox';

export default function Tool() {
  const { editor } = useEditor();

  return (
    <div>
      {editor && (
        <div>
          <Circle editor={editor} />
          <Rectangle editor={editor} />
        </div>
      )}
    </div>
  );
}
