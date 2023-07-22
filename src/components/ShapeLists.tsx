import { useEditorContext } from '@/context/EditorContext';
import { Flex, Menu, Paper, Text } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
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
    key: 'R',
  },
  {
    id: 'circle',
    label: 'Circle',
    icon: <IconCircle size="1.25rem" />,
    key: 'C',
  },
  {
    id: 'triangle',
    label: 'Triangle',
    icon: <IconTriangle size="1.25rem" />,
    key: 'T',
  },
  { id: 'line', label: 'Line', icon: <IconSlash size="1.25rem" />, key: 'L' },
  { id: 'star', label: 'Star', icon: <IconStar size="1.25rem" />, key: 'S' },
  {
    id: 'polygon',
    label: 'Polygon',
    icon: <IconPolygon size="1.25rem" />,
    key: 'P',
  },
];

export default function ShapeList() {
  const { tool } = useEditorContext();

  useHotkeys([
    ['C', () => handleAddShape('circle')],
    ['R', () => handleAddShape('rectangle')],
    ['T', () => handleAddShape('triangle')],
    ['L', () => handleAddShape('line')],
    ['S', () => handleAddShape('star')],
    ['P', () => handleAddShape('polygon')],
  ]);

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
          <Flex justify="space-between" align="center">
            <Text>{shape.label}</Text>
            <Paper px="sm" py={1}>
              <Text fz="10px" fw="bold">
                {shape.key}
              </Text>
            </Paper>
          </Flex>
        </Menu.Item>
      ))}
    </Menu.Dropdown>
  );
}
