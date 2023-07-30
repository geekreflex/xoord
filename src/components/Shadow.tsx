import {
  Box,
  Button,
  Collapse,
  Flex,
  NumberInput,
  Slider,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronRight } from '@tabler/icons-react';

export default function Shadow() {
  const [opened, { toggle }] = useDisclosure(false);

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
          <Text size="xs">Shadow</Text>
        </Button>
      </Flex>
      <Collapse
        mt={10}
        in={opened}
        transitionDuration={200}
        transitionTimingFunction="linear"
      >
        <Stack spacing={10}>
          <Flex direction="column">
            <Flex justify="flex-end">
              <NumberInput
                size="18px"
                value={10}
                hideControls
                styles={{ input: { fontSize: '12px' } }}
                w={50}
              />
            </Flex>
            <Slider min={0} max={100} />
          </Flex>
        </Stack>
      </Collapse>
    </Box>
  );
}
