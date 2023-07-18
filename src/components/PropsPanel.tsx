import { useEditorContext } from '@/context/EditorContext';
import {
  Box,
  Center,
  Divider,
  Group,
  Paper,
  ScrollArea,
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
  wrapper: {
    position: 'fixed',
    top: 100,
    right: 50,
    width: 270,
    overflow: 'auto',
  },
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
      <Paper shadow="lg" className={classes.wrapper} withBorder radius="lg">
        <Group id="handle" px="sm" className={classes.handle}>
          <IconGripVertical size="1.25rem" />
          <Text fw="bold" size="sm">
            Edit Properties
          </Text>
        </Group>
        <Divider />
        <ScrollArea.Autosize mah={500} mih={50} mx="auto">
          <Box p="md">
            {!selectedObject && (
              <Center>
                <Text c="dimmed" size="14px" fw="bold">
                  Object Properties
                </Text>
              </Center>
            )}
            {selectedObject && renderProp()}
          </Box>
        </ScrollArea.Autosize>
      </Paper>
    </Drag>
  );
}
