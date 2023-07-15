import { Stack } from '@mantine/core';
import Fill from '../Fill';
import Stroke from '../Stroke';
import ObjectOptions from '../ObjectOptions';

export default function ShapeProps() {
  return (
    <Stack>
      <ObjectOptions />
      <Fill />
      <Stroke />
    </Stack>
  );
}
