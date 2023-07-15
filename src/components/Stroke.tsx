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

export default function Stroke() {
  const { editor } = useEditorContext();
  const [opened, setOpened] = useState(false);
  const [color, setColor] = useState('');
  const { selectedObject } = useEditorContext();

  useEffect(() => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ stroke: color || selectedObject?.stroke });
      }
      editor.canvas.renderAll();
    }
  }, [editor, color]);

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
              Solid
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack>
              <Flex align="center" gap={10}>
                <Text size="xs" fw="bold">
                  Color
                </Text>
                <ColorInput
                  defaultValue={selectedObject?.stroke as string}
                  onChange={setColor}
                />
              </Flex>
              <Flex align="center" gap={10}>
                <Text size="xs" fw="bold">
                  Width
                </Text>
                <Group>
                  <NumberInput
                    min={0}
                    max={100}
                    defaultValue={selectedObject?.strokeWidth}
                  />
                </Group>
              </Flex>
              <Flex align="center" gap={10}>
                <Text size="xs" fw="bold">
                  Style
                </Text>
                <Group>
                  <Select data={['Solid', 'Dashed']} />
                </Group>
              </Flex>
            </Stack>
          </Popover.Dropdown>
        </Popover>
      </Group>
    </Box>
  );
}
