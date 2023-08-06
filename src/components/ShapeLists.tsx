import { useEditorContext } from '@/context/EditorContext';
import { ActionIcon, Flex, Menu, Paper, Text, Tooltip } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import {
  IconCircle,
  IconCircleSquare,
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
    key: 'O',
  },
  {
    id: 'triangle',
    label: 'Triangle',
    icon: <IconTriangle size="1.25rem" />,
    key: 'Shift + T',
  },
  { id: 'line', label: 'Line', icon: <IconSlash size="1.25rem" />, key: 'L' },
  { id: 'star', label: 'Star', icon: <IconStar size="1.25rem" />, key: '' },
  {
    id: 'polygon',
    label: 'Polygon',
    icon: <IconPolygon size="1.25rem" />,
    key: '',
  },
];

export default function ShapeList() {
  const { tool } = useEditorContext();

  useHotkeys([
    ['O', () => handleAddShape('circle')],
    ['R', () => handleAddShape('rectangle')],
    ['Shift + T', () => handleAddShape('triangle')],
    ['L', () => handleAddShape('line')],
    // ['S', () => handleAddShape('star')],
    // ['P', () => handleAddShape('polygon')],
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
    <Menu width={200} offset={20} transitionProps={{ transition: 'pop' }}>
      <Menu.Target>
        <ActionIcon variant="light">
          <Tooltip label="Shapes tool" fz="xs" position="bottom" withArrow>
            <IconCircleSquare size="1.25rem" />
          </Tooltip>
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        {shapes.map((shape) => (
          <Menu.Item
            key={shape.id}
            fz="xs"
            p={8}
            icon={shape.icon as any}
            onClick={() => handleAddShape(shape.id)}
          >
            <Flex justify="space-between" align="center">
              <Text>{shape.label}</Text>
            </Flex>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
