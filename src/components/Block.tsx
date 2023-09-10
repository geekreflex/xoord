import { ActionIcon, Flex, Tooltip, createStyles } from '@mantine/core';

interface IBlock {
  items: { value: string; label: string; icon: any }[];
  currentItem?: string;
  onChange: (value: string) => void;
}

const useStyle = createStyles(() => ({
  block: {
    borderColor: '#302e2e',
  },
  active: {
    outline: '2px solid #636866',
    outlineOffset: 2,
    '&:focus-within': {
      outline: '2px solid #636866',
      outlineOffset: 2,
    },
  },
}));

export default function Block({ items, currentItem, onChange }: IBlock) {
  const { classes } = useStyle();

  return (
    <Flex gap={10}>
      {items.map((item) => (
        <Tooltip label={item.label} fz="xs" position="bottom" withArrow>
          <ActionIcon
            variant={currentItem === item.value ? 'default' : 'outline'}
            onClick={() => onChange(item.value)}
            size={35}
            radius="md"
            className={`${classes.block} ${
              currentItem && currentItem === item.value ? classes.active : ''
            }`}
          >
            <item.icon size="1rem" stroke={3} />
          </ActionIcon>
        </Tooltip>
      ))}
    </Flex>
  );
}
