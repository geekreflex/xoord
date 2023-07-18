import { useEditorContext } from '@/context/EditorContext';
import {
  Box,
  Button,
  Collapse,
  ColorInput,
  Flex,
  NumberInput,
  Select,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const strokeStyles = [
  { label: 'Solid', value: '' },
  { label: 'Dashed', value: '30 10' },
  { label: 'Dotted', value: '5 5' },
];

export default function Stroke() {
  const [opened, { toggle }] = useDisclosure(false);
  const { editor } = useEditorContext();
  const [color, setColor] = useState('#000000');
  const [width, setWidth] = useState<number | ''>(0);
  const [style, setStyle] = useState<number[]>();
  const [corner, setCorner] = useState<number>(0);
  const { selectedObject, selectedType } = useEditorContext();

  useEffect(() => {
    setColor((selectedObject?.stroke as string) || '#000000');
    setWidth((selectedObject?.strokeWidth as number) || 0);
    setStyle(selectedObject?.strokeDashArray);
    // @ts-expect-error
    setCorner(selectedObject?.rx! as number);
  }, [selectedObject]);

  const handleColor = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        setColor(color);
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
        if (width === 0) {
          activeObject.set({
            strokeWidth: 0,
          });
        }
        activeObject.set({
          strokeWidth: width || selectedObject?.strokeWidth,
        });
        setWidth(width);
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
        setStyle(arr);
      }
    }
  };

  const handleCorner = (corner: number) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        // @ts-expect-error
        activeObject.set({ rx: corner, ry: corner });
        editor.canvas.renderAll();
      }
    }
  };

  return (
    <Box>
      <Flex align="center" gap={10}>
        <Button
          rightIcon={<IconChevronRight size="1rem" />}
          onClick={toggle}
          variant="default"
          fullWidth
          px={10}
          styles={{
            inner: {
              justifyContent: 'space-between',
            },
          }}
        >
          <Text size="xs">Edit Border</Text>
        </Button>
      </Flex>

      <Collapse
        mt={10}
        in={opened}
        transitionDuration={200}
        transitionTimingFunction="linear"
      >
        <Stack spacing={10}>
          <Flex gap={10}>
            <ColorInput value={color} format="hexa" onChange={handleColor} />
            <NumberInput
              min={0}
              max={100}
              value={width}
              onChange={handleWidth}
              w={110}
            />
          </Flex>
          <Flex gap={10}>
            <Select
              w="100%"
              data={strokeStyles}
              value={(style?.join(' ') as string) || ''}
              onChange={handleStyle}
            />
            {selectedType === 'rect' && (
              <Tooltip label="Corners">
                <NumberInput
                  min={0}
                  max={100}
                  value={corner}
                  onChange={handleCorner}
                  w={100}
                />
              </Tooltip>
            )}
          </Flex>
        </Stack>
      </Collapse>
    </Box>
  );
}
