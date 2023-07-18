import { Stack } from '@mantine/core';
import Fill from '../Fill';
import Stroke from '../Stroke';
import ObjectOptions from '../ObjectOptions';
import TextOptions from '../TextOptions';
import Export from '../Export';

export default function TextProps() {
  return (
    <Stack spacing={10}>
      <Fill />
      <TextOptions />
      <ObjectOptions />
      <Stroke />
      <Export />
    </Stack>
  );
}
