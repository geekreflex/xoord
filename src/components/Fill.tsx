import { useEditorContext } from '@/context/EditorContext';
import {
  Box,
  Button,
  Flex,
  Group,
  Paper,
  Text,
  createStyles,
} from '@mantine/core';

const useStyle = createStyles(() => ({
  wrap: {},
  box: {
    padding: 0,
    display: 'block',
  },
  flex: {
    width: '100%',
  },
}));

export default function Fill() {
  const { selectedObject } = useEditorContext();
  const { classes } = useStyle();
  return (
    <Box>
      <Group noWrap>
        <Text size="sm" fw="bold">
          Color
        </Text>
        <Button
          variant="default"
          fullWidth
          className={classes.box}
          px={6}
          styles={{
            inner: {
              alignItems: 'center',
              justifyContent: 'flex-start',
            },
          }}
        >
          <Paper
            c="green"
            p="sm"
            style={{ backgroundColor: selectedObject?.fill as string }}
            withBorder
          ></Paper>
          <Text size="xs" ml={10}>
            #344090
          </Text>
        </Button>
      </Group>
    </Box>
  );
}
