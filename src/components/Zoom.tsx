import { useEditorContext } from '@/context/EditorContext';
import {
  ActionIcon,
  Flex,
  Group,
  Menu,
  NumberInput,
  Paper,
  Text,
  Tooltip,
} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { IconZoomIn, IconZoomOut } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function Zoom() {
  const [currentZoom, setCurrentZoom] = useState(100);
  const { editor } = useEditorContext();

  useHotkeys([
    ['ctrl+=', () => handleZoomIn()],
    ['ctrl+-', () => handleZoomOut()],
  ]);

  useEffect(() => {
    const canvas = editor?.canvas;
    if (canvas) {
      canvas.on('mouse:wheel', () => {
        handleUpdateZoom();
      });
    }
    handleUpdateZoom();
  }, [editor]);

  const handleZoomIn = () => {
    editor?.zoomIn();
    handleUpdateZoom();
  };

  const handleZoomOut = () => {
    editor?.zoomOut();
    handleUpdateZoom();
  };

  const handleUpdateZoom = () => {
    if (editor) {
      const zoom = editor.canvas.getZoom();
      setCurrentZoom(zoom * 100);
    }
  };

  const handleZoom = (value: string) => {
    console.log(value);
  };

  const zoomList = [
    {
      id: 'zoom-in',
      label: 'Zoom in',
      key: 'Ctrl + +',
    },
    {
      id: 'zoom-out',
      label: 'Zoom out',
      key: 'Ctrl + -',
    },
    {
      id: 'zoom-to-fit',
      label: 'Zoom to fit',
      key: 'Shift + 1',
    },
    {
      id: 'zoom-50',
      label: 'Zoom to 50%',
      key: '',
    },
    {
      id: 'zoom-100',
      label: 'Zoom to 100%',
      key: 'Ctrl + 0',
    },
    {
      id: 'zoom-200',
      label: 'Zoom to 200%',
      key: '',
    },
  ];

  return (
    <Group spacing="xs">
      <Tooltip label="Zoom Out (Ctrl + =)" fz="xs" position="bottom" withArrow>
        <ActionIcon onClick={handleZoomOut} variant="light">
          <IconZoomOut size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Menu withArrow width={220}>
        <Menu.Target>
          <Paper withBorder p="4px" w="60px" style={{ cursor: 'pointer' }}>
            <Text size="xs" weight="bold" align="center">
              {currentZoom.toFixed()}%
            </Text>
          </Paper>
        </Menu.Target>
        <Menu.Dropdown>
          <NumberInput hideControls mb={10} value={currentZoom} />
          {zoomList.map((item) => (
            <Menu.Item
              key={item.id}
              fz="xs"
              p="5px"
              onClick={() => handleZoom(item.id)}
            >
              <Flex justify="space-between" align="center">
                <Text>{item.label}</Text>
                {item.key && (
                  <Paper px="sm" py={1}>
                    <Text fz="10px" fw="bold">
                      {item.key}
                    </Text>
                  </Paper>
                )}
              </Flex>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
      <Tooltip label="Zoom In (Ctrl + -)" fz="xs" position="bottom" withArrow>
        <ActionIcon onClick={handleZoomIn} variant="light">
          <IconZoomIn size="1.25rem" />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
