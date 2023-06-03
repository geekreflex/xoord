import type { Element } from '@/core';
import { styled } from 'styled-components';

export default function Shapes({ tool }: { tool: Element }) {
  const shapeList = [
    { name: 'Circle', func: () => tool.addCirlce() },
    { name: 'Triangle', func: () => tool.addTriangle() },
    { name: 'Rectangle', func: () => tool.addRectangle() },
    { name: 'Square', func: () => tool.addSquare() },
    { name: 'Star', func: () => tool.addStar() },
    { name: 'Polygon', func: () => tool.addPolygon() },
  ];
  return (
    <ShapesWrap>
      <h3>Basic Shapes</h3>
      <div className="list-items">
        {shapeList.map((shape) => (
          <div
            title={shape.name}
            key={shape.name}
            className="item"
            onClick={shape.func}
          ></div>
        ))}
      </div>
    </ShapesWrap>
  );
}

const ShapesWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  h3 {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .list-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;

    .item {
      background-color: #e8e8e8;
      height: 65px;
      padding: 20px;
      font-size: 11px;
      font-weight: 600;
      color: #555;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${(props) => props.theme.colors.borderColor2};
      &:hover {
        background-color: #b6b6b6;
      }
    }
  }
`;
