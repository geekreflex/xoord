import { ActionIcon, Group, Paper, Tooltip, createStyles } from '@mantine/core';
import { IconCircleSquare } from '@tabler/icons-react';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'absolute',
    zIndex: 9999,
  },
}));

export default function Toolbar() {
  const { classes } = useStyles();
  return (
    <Paper className={classes.wrapper} shadow="md" p="sm" m="lg" withBorder>
      <Group spacing="xs">
        <Tooltip label="Shapes tool" withArrow>
          <ActionIcon onClick={() => console.log('clicked')}>
            <IconCircleSquare size="1.25rem" />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Paper>
  );
}
