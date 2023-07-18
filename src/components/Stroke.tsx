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
  const { selectedObject } = useEditorContext();

  useEffect(() => {
    setColor(selectedObject?.stroke as string);
    setWidth(selectedObject?.strokeWidth as number);
    setStyle(selectedObject?.strokeDashArray);
    setColor(selectedObject?.rx! as number);
    console.log(selectedObject?.strokeDashArray);
  }, [selectedObject]);

  const handleColor = (color: string) => {
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

  const handleCorner = (corner: number) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
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
          c="#999"
          variant="default"
          fullWidth
          styles={{
            inner: {
              justifyContent: 'space-between',
              fontSize: '14px',
            },
          }}
        >
          <Text size="sm">Edit Border</Text>
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
            <ColorInput
              defaultValue={color}
              format="hexa"
              onChange={handleColor}
            />
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
              data={strokeStyles}
              value={(style?.join(' ') as string) || ''}
              onChange={handleStyle}
            />
            <Tooltip label="Corners">
              <NumberInput
                min={0}
                max={100}
                value={corner}
                onChange={handleCorner}
                w={100}
              />
            </Tooltip>
          </Flex>
        </Stack>
      </Collapse>
    </Box>
  );
}
