import { useEditorContext } from '@/context/EditorContext';
import { styled } from 'styled-components';
import Circle from '@/assets/shapes/circle.png';
import Rectangle from '@/assets/shapes/rectangle.png';
import Square from '@/assets/shapes/square.png';
import Triangle from '@/assets/shapes/triangle.png';
import Polygon from '@/assets/shapes/polygon.png';
import Star from '@/assets/shapes/star.png';

const shapes = [
  { name: 'Circle', image: Circle },
  { name: 'Triangle', image: Triangle },
  { name: 'Rectangle', image: Rectangle },
  { name: 'Square', image: Square },
  { name: 'Polygon', image: Polygon },
  { name: 'Star', image: Star },
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

  const handleDrag = (element: string) => {
    onShapeClick(element);
  };

  return (
    <Wrap>
      <div className="items-wrap">
        <h4 className="items-wrap__title">Shapes</h4>
        <div className="item-list">
          {shapes.map((item, index) => (
            <div
              className="item"
              key={index}
              onClick={() => onShapeClick(item.name)}
              draggable={true}
              onDragEnd={() => handleDrag(item.name)}
            >
              <img src={item.image} alt={item.name} />
            </div>
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
  .items-wrap__title {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .item-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;

    .item {
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
      background-color: ${(props) => props.theme.colors.secondary}60;
      border-radius: ${(props) => props.theme.radius.small};
      cursor: pointer;
      padding: 5px;
      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        border: 1px solid ${(props) => props.theme.colors.borderColor};
      }

      img {
        width: 100%;
      }
    }
  }
`;
