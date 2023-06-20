import { useEditorContext } from '@/context/EditorContext';
import { LineX } from '@/styles/global';
import { styled } from 'styled-components';

const shapes = [
  { name: 'Circle' },
  { name: 'Triangle' },
  { name: 'Rectangle' },
  { name: 'Square' },
  { name: 'Star' },
  { name: 'Polygon' },
];

export default function ElementsTool() {
  const { tool } = useEditorContext();

  const onShapeClick = (shape: string) => {
    switch (shape) {
      case 'Circle':
        return tool?.addCircle();
      case 'Rectangle':
        return tool?.addRectangle();
      case 'Square':
        return tool?.addSquare();
      case 'Triangle':
        return tool?.addTriangle();
      case 'Star':
        return tool?.addStar();
      case 'Polygon':
        return tool?.addPolygon();
      default:
        return null;
    }
  };

  return (
    <Wrap>
      <div className="items-wrap">
        <h4>Shapes</h4>
        <LineX />
        <div className="item-list">
          {shapes.map((item, index) => (
            <div
              className="item"
              key={index}
              title={item.name}
              onClick={() => onShapeClick(item.name)}
            ></div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .items-wrap {
    display: flex;
    flex-direction: column;
  }
  .item-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;

    .item {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.colors.secondary};
      border-radius: ${(props) => props.theme.radius.small};
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }

      img {
        width: 100%;
      }
    }
  }
`;
