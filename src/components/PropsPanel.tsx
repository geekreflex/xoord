import { useEditorContext } from '@/context/EditorContext';
import {
  Box,
  Center,
  Divider,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
  createStyles,
} from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import Drag from 'react-draggable';
import ShapeProps from './props/ShapeProps';
import ImageProps from './props/ImageProps';
import SelectionProps from './props/SelectionProps';
import TextProps from './props/TextProps';

const useStyles = createStyles(() => ({
  wrapper: {},
  handle: {
    cursor: 'grab',
    height: 45,
  },
}));

export default function PropsPanel() {
  const { selectedObject, selectedType } = useEditorContext();
  const { classes } = useStyles();

  const renderProp = () => {
    switch (selectedType) {
      case 'circle':
      case 'rect':
      case 'triangle':
      case 'line':
      case 'polygon':
        return <ShapeProps />;
      case 'image':
        return <ImageProps />;
      case 'textbox':
        return <TextProps />;
      case 'activeSelection':
        return <SelectionProps />;
      default:
        return 'null';
    }
  };

  return (
    <Drag handle="#handle">
      <Paper
        pos="fixed"
        top={100}
        right={50}
        w={270}
        shadow="lg"
        withBorder
        radius="lg"
        style={{
          boxShadow: `rgba(0, 0, 0, 0.5) 0px 3px 6px 1px`,
        }}
      >
        <Group id="handle" px="sm" className={classes.handle}>
          <IconGripVertical size="1.25rem" />
          <Text fw="bold" size="sm">
            Edit Properties
          </Text>
        </Group>
        <Divider />
        <ScrollArea.Autosize mah={500} mih={50} mx="auto" pos="relative">
          <Box p="md">
            {!selectedObject && (
              <Center>
                <Text c="dimmed" size="14px" fw="bold">
                  Object Properties
                </Text>
              </Center>
            )}
            {selectedObject && <Stack spacing={10}>{renderProp()}</Stack>}
          </Box>
        </ScrollArea.Autosize>
      </Paper>
    </Drag>
  );
}
