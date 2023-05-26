import { Shapes } from '../../../core';

export default function Rectangle({ shapes }: { shapes: Shapes }) {
  const onAddRect = () => {
    shapes.addRectangle();
  };
  return <button onClick={onAddRect}>Rectangle</button>;
}
