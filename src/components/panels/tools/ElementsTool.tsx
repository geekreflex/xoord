import { useEditor } from '@/context/EditorContext';

export default function ElementsTool() {
  const { elementTool } = useEditor();

  const onAddCircle = () => {
    elementTool?.addCirlce();
  };

  const onAddRect = () => {
    elementTool?.addRectangle();
  };

  return (
    <div>
      <div>
        <button onClick={onAddCircle}>Add Circle</button>
        <button onClick={onAddRect}>Add Rectangle</button>
      </div>
    </div>
  );
}
