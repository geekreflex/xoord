import { useEditorContext } from '@/context/EditorContext';
import {
  Box,
  Center,
  Divider,
  Group,
  Paper,
  Text,
  createStyles,
} from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import Drag from 'react-draggable';
import ShapeProps from './props/ShapeProps';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'fixed',
    top: 100,
    right: 50,
    width: 250,
  },
  handle: {
    cursor: 'grab',
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
      default:
        return 'null';
    }
  };

  return (
    <Drag handle="#handle">
      <Paper
        shadow="lg"
        className={classes.wrapper}
        withBorder
        p="sm"
        radius="lg"
      >
        <Group id="handle" mb={5} className={classes.handle}>
          <IconGripVertical size="1.25rem" />
          <Text fw="bold" size="sm">
            Edit Properties
          </Text>
        </Group>
        <Divider />
        <Box pt="sm">
          {!selectedObject && (
            <Center>
              <Text c="dimmed" size="14px">
                Object Properties
              </Text>
            </Center>
          )}
          {selectedObject && renderProp()}
        </Box>
      </Paper>
    </Drag>
  );
}
