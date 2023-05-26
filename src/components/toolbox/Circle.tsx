import { Tools } from '../../core';

export default function Circle({ tools }: { tools: Tools }) {
  const onAddCircle = () => {
    tools.addCirlce();
  };

  return <button onClick={onAddCircle}>Circle</button>;
}
