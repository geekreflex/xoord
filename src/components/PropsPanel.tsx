import { Box, Paper, Stack } from '@mantine/core';
import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import Stroke from './props/Stroke';
import Fill from './props/Fill';
import StrokeWidth from './props/StrokeWidth';
import StrokeStyle from './props/StrokStyle';
import Layers from './props/Layers';
import Actions from './props/Actions';

export default function PropsPanel() {
  const [visible, setVisible] = useState(true);

  useHotkeys([['ctrl+k', () => setVisible(!visible)]]);

  return (
    <Paper
      pos="fixed"
      top={100}
      left={20}
      w={240}
      shadow="lg"
      radius="md"
      style={{
        boxShadow: `rgba(0, 0, 0, 0.1) 0px 3px 4px 1px`,
        visibility: visible ? 'visible' : 'hidden',
        opacity: visible ? 1 : 0,
      }}
    >
      <Box p="sm">
        <Stack>
          <Stroke />
          <Fill />
          <StrokeWidth />
          <StrokeStyle />
          <Layers />
          <Actions />
        </Stack>
      </Box>
    </Paper>
  );
}
