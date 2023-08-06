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
            className={classes.block}
            key={color.color}
            onClick={() => onColor(color.color)}
          />
        ))}
      </Flex>
      <Divider orientation="vertical" mx={10} />
      <Paper className={classes.block} bg={currentColor} withBorder />
    </Flex>
  );
}
