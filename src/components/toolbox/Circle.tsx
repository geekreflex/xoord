import { Tools } from '../core';
import { Editor } from '../core/Editor';

export default function Circle({ editor }: { editor: Editor }) {
  const onAddCircle = () => {
    const tools = new Tools(editor);
    tools.addCirlce();
  };

  return <button onClick={onAddCircle}>Circle</button>;
}
