import { useEditorContext } from '@/context/EditorContext';

export default function ElementsTool() {
  const { elementTool } = useEditorContext();

  const onAddCircle = () => {
    elementTool?.addCirlce();
  };

  const onAddRect = () => {
    elementTool?.addRectangle();
  };

  const onAddSquare = () => {
    elementTool?.addSquare();
  };

  const onAddTriangle = () => {
    elementTool?.addTriangle();
  };

  return (
    <div>
      <div>
        <button onClick={onAddCircle}>Add Circle</button>
        <button onClick={onAddRect}>Add Rectangle</button>
        <button onClick={onAddSquare}>Add Square</button>
        <button onClick={onAddTriangle}>Add Triangle</button>
      </div>
    </div>
  );
}
