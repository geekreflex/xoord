import type { Tool } from '@/core/Tool';
import { styled } from 'styled-components';

export default function ElementsTool({ tool }: { tool: Tool }) {
  const shapes = [
    { name: 'Circle', func: () => tool.addCircle() },
    { name: 'Triangle', func: () => tool.addTriangle() },
    { name: 'Rectangle', func: () => tool.addRectangle() },
    { name: 'Square', func: () => tool.addSquare() },
    { name: 'Star', func: () => tool.addStar() },
    { name: 'Polygon', func: () => tool.addPolygon() },
  ];
  return (
    <Wrap>
      <p>Element</p>
      <div className="list-items">
        {shapes.map((shape) => (
          <div
            title={shape.name}
            key={shape.name}
            className="item"
            onClick={shape.func}
          ></div>
        ))}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .list-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 6px;

    .item {
      background-color: ${(props) => props.theme.colors.secondary};
      height: 60px;
      padding: 20px;
      font-size: 11px;
      font-weight: 600;
      color: #555;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      &:hover {
        background-color: ${(props) => props.theme.colors.secondary}50;
      }
    }
  }
`;
