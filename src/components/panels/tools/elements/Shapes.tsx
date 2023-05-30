import type { Element } from '@/core';
import { styled } from 'styled-components';

export default function Shapes({ tool }: { tool: Element }) {
  const shapeList = [
    { name: 'Circle', func: () => tool.addCirlce() },
    { name: 'Triangle', func: () => tool.addTriangle() },
    { name: 'Rectangle', func: () => tool.addRectangle() },
    { name: 'Square', func: () => tool.addSquare() },
  ];
  return (
    <ShapesWrap>
      <h3>Basic Shapes</h3>
      <div className="list-items">
        {shapeList.map((shape) => (
          <div key={shape.name} className="item" onClick={shape.func}>
            {shape.name}
          </div>
        ))}
      </div>
    </ShapesWrap>
  );
}

const ShapesWrap = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .list-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

    .item {
      background-color: #e8e8e8;
      height: 100px;
      padding: 20px;
      font-size: 11px;
      font-weight: 600;
      color: #555;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #b6b6b6;
      }
    }
  }
`;
