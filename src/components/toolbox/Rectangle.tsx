import { Tools } from '../core';

export default function Rectangle({ tools }: { tools: Tools }) {
  const onAddRect = () => {
    tools.addRectangle();
  };
  return <button onClick={onAddRect}>Rectangle</button>;
}
