import { Divider, Flex, Paper, createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  block: {
    width: '28px',
    height: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 4,
  },
  active: {
    outline: '2px solid #33ed90',
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
      <Paper className={classes.block} bg={currentColor} withBorder />
    </Flex>
  );
}
