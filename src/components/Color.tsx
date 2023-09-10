import {
  Divider,
  Flex,
  Paper,
  createStyles,
  ColorPicker,
  Popover,
  Box,
  ColorInput,
} from '@mantine/core';

const useStyles = createStyles(() => ({
  block: {
    width: '28px',
    height: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  active: {
    outline: '2px solid #72837b',
    outlineOffset: 2,
  },
}));

interface IColor {
  currentColor: string;
  colors: { color: string; label: string }[];
  onColor: (color: string) => void;
}

export default function Color({ currentColor, colors, onColor }: IColor) {
  const { classes } = useStyles();
  return (
    <Flex justify="space-between">
      <Flex justify="space-between" gap={5} style={{ flex: 1 }}>
        {colors.map((color) => (
          <Paper
            radius="lg"
            bg={color.color}
            key={color.color}
            onClick={() => onColor(color.color)}
            className={`${classes.block} ${
              currentColor === color.color ? classes.active : ''
            }`}
          />
        ))}
      </Flex>
      <Divider orientation="vertical" mx={10} />
      <Popover offset={20} position="left-start" withArrow>
        <Popover.Target>
          <Paper
            radius="lg"
            className={classes.block}
            bg={currentColor}
            withBorder
          />
        </Popover.Target>
        <Popover.Dropdown>
          <ColorTool onColor={onColor} color={currentColor} />
        </Popover.Dropdown>
      </Popover>
    </Flex>
  );
}

interface ColorToolProps {
  onColor: (color: string) => void;
  color: string;
}

function ColorTool({ onColor, color }: ColorToolProps) {
  return (
    <Box w={200}>
      <ColorInput mb={10} value={color} onChange={onColor} />
      <ColorPicker
        format="rgba"
        value={color}
        onChange={onColor}
        swatches={[
          '#25262b',
          '#868e96',
          '#fa5252',
          '#e64980',
          '#be4bdb',
          '#7950f2',
          '#4c6ef5',
          '#228be6',
          '#15aabf',
          '#12b886',
          '#40c057',
          '#82c91e',
          '#fab005',
          '#fd7e14',
        ]}
      />
    </Box>
  );
}
