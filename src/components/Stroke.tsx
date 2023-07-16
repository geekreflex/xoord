import { useEditorContext } from '@/context/EditorContext';
import {
  Box,
  Button,
  ColorInput,
  Flex,
  Group,
  NumberInput,
  Popover,
  Select,
  Stack,
  Text,
} from '@mantine/core';
import { IconBorderStyle2 } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const strokeStyles = [
  { label: 'Solid', value: 'solid' },
  { label: 'Dashed', value: '30 10' },
  { label: 'Dotted', value: '5 5' },
];

export default function Stroke() {
  const { editor } = useEditorContext();
  const [opened, setOpened] = useState(false);
  const [color, setColor] = useState('');
  const [width, setWidth] = useState<number | ''>(0);
  const [style, setStyle] = useState<number[]>();
  const { selectedObject } = useEditorContext();

  useEffect(() => {
    setColor(selectedObject?.stroke as string);
    setWidth(selectedObject?.strokeWidth as number);
    setStyle(selectedObject?.strokeDashArray);
  }, [selectedObject]);

  const handleColor = (color: string) => {
    setOpened(true);
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({
          stroke: color || selectedObject?.stroke,
        });
      }
      editor.canvas.renderAll();
    }
  };

  const handleWidth = (width: number) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({
          strokeWidth: width || selectedObject?.strokeWidth,
        });
      }
      editor.canvas.renderAll();
    }
  };

  const handleStyle = (style: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        const arr = style ? style.split(' ').map(Number) : [];
        activeObject.set({ strokeDashArray: arr });
        editor.canvas.renderAll();
      }
    }
  };

  return (
    <Box>
      <Group noWrap>
        <Text size="xs" fw="bold">
          Border
        </Text>
        <Popover width={230} withArrow opened={opened}>
          <Popover.Target>
            <Button
              onClick={() => setOpened((o) => !o)}
              leftIcon={<IconBorderStyle2 />}
              c="#999"
              variant="default"
              fullWidth
              styles={{
                inner: {
                  justifyContent: 'flex-start',
                  fontSize: '14px',
                  fontWeight: 'normal',
                },
              }}
            >
              {!style
                ? 'Solid'
                : strokeStyles.map((stroke) => {
                    return stroke.value === style?.join(' ').toString()
                      ? stroke.label
                      : '';
                  })}
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack>
              <Flex align="center" gap={10}>
                <Text size="xs" fw="bold">
                  Color
                </Text>
                <ColorInput defaultValue={color} onChange={handleColor} />
              </Flex>
              <Flex align="center" gap={10}>
                <Text size="xs" fw="bold">
                  Width
                </Text>
                <Group>
                  <NumberInput
                    min={0}
                    max={100}
                    value={width}
                    onChange={handleWidth}
                  />
                </Group>
              </Flex>
              <Flex align="center" gap={10}>
                <Text size="xs" fw="bold">
                  Style
                </Text>
                <Group>
                  <Select
                    data={strokeStyles}
                    value={
                      (selectedObject?.strokeDashArray?.join(' ') as string) ||
                      'solid'
                    }
                    onChange={handleStyle}
                  />
                </Group>
              </Flex>
            </Stack>
          </Popover.Dropdown>
        </Popover>
      </Group>
    </Box>
  );
}
