import { useEditorContext } from '@/context/EditorContext';
import { Menu } from '@mantine/core';
import {
  IconCircle,
  IconPolygon,
  IconRectangle,
  IconSlash,
  IconStar,
  IconTriangle,
} from '@tabler/icons-react';

const shapes = [
  {
    id: 'rectangle',
    label: 'Rectangle',
    icon: <IconRectangle size="1.25rem" />,
  },
  { id: 'circle', label: 'Circle', icon: <IconCircle size="1.25rem" /> },
  { id: 'triangle', label: 'Triangle', icon: <IconTriangle size="1.25rem" /> },
  { id: 'line', label: 'Line', icon: <IconSlash size="1.25rem" /> },
  { id: 'star', label: 'Star', icon: <IconStar size="1.25rem" /> },
  { id: 'polygon', label: 'Polygon', icon: <IconPolygon size="1.25rem" /> },
];

export default function ShapeList() {
  const { tool } = useEditorContext();

  const handleAddShape = (shape: string) => {
    if (tool) {
      switch (shape) {
        case 'circle':
          tool.addCircle();
          break;
        case 'rectangle':
          tool.addRectangle();
          break;
        case 'triangle':
          tool.addTriangle();
          break;
        case 'line':
          tool.addLine();
          break;
        case 'star':
          tool.addStar();
          break;
        case 'polygon':
          tool.addPolygon();
          break;
        default:
          break;
      }
    }
  };
  return (
    <Menu.Dropdown>
      {shapes.map((shape) => (
        <Menu.Item
          key={shape.id}
          fz="xs"
          p="5px"
          icon={shape.icon as any}
          onClick={() => handleAddShape(shape.id)}
        >
          {shape.label}
        </Menu.Item>
      ))}
    </Menu.Dropdown>
  );
}
