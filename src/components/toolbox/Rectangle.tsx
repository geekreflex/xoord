import { Editor, Tools } from '../core';

export default function Rectangle({ editor }: { editor: Editor }) {
  const onAddRect = () => {
    const tools = new Tools(editor);
    tools.addRectangle();
  };
  return <button onClick={onAddRect}>Rectangle</button>;
}
