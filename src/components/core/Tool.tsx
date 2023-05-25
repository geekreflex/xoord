import { styled } from 'styled-components';
import { fabric } from 'fabric';

export default function Tool({ canvas }: { canvas: fabric.Canvas }) {
  const addCircle = () => {
    if (canvas) {
      const circle = new fabric.Circle({
        radius: 50,
        fill: 'red',
        left: 100,
        top: 100,
      });
      canvas.add(circle);
    }
  };

  const addRect = () => {
    if (canvas) {
      const rect = new fabric.Rect({
        fill: 'red',
        left: 100,
        top: 100,
        width: 100,
        height: 100,
      });
      canvas.add(rect);
    }
  };
  return (
    <Wrap>
      <div>
        <button onClick={addCircle}>Add Circle</button>
        <button onClick={addRect}>Add Rect</button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  background-color: #555;
  left: 30px;
  bottom: 50px;
  padding: 20px;
  width: 400px;

  button {
    padding: 10px;
  }
`;
