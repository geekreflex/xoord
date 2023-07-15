import { Box, Center, Divider, Paper, Text, createStyles } from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import Drag from 'react-draggable';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'fixed',
    top: 100,
    right: 50,
    width: 200,
  },
}));

export default function PropsPanel() {
  const { classes } = useStyles();
  return (
    <Drag handle="#handle">
      <Paper
        shadow="lg"
        className={classes.wrapper}
        withBorder
        p="sm"
        radius="lg"
      >
        <Box id="handle">
          <IconGripVertical size="1.25rem" />
        </Box>
        <Divider />
        <Box pt="sm">
          <Center>
            <Text c="dimmed" size="14px">
              Object Properties
            </Text>
          </Center>
        </Box>
      </Paper>
    </Drag>
  );
}
