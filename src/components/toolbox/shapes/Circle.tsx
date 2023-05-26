import { Shapes } from '@/core';

export default function Circle({ shapes }: { shapes: Shapes }) {
  const onAddCircle = () => {
    shapes.addCirlce();
  };

  return <button onClick={onAddCircle}>Circle</button>;
}
