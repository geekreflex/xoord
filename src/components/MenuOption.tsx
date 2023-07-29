import { ActionIcon, Divider, Menu, Text } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconDownload,
  IconFolder,
  IconHelp,
  IconMenu2,
  IconPhotoDown,
} from '@tabler/icons-react';

export default function MenuOption() {
  const menuList = [
    {
      label: 'Open',
      id: 'open',
      icon: <IconFolder size="1.25rem" />,
      key: 'Ctrl+O',
      action: () => {},
      disabled: false,
    },
    {
      label: 'Save to...',
      id: 'save',
      icon: <IconDownload size="1.25rem" />,
      key: '',
      action: () => {},
      disabled: false,
    },
    {
      label: 'Export Design...',
      id: 'export',
      icon: <IconPhotoDown size="1.25rem" />,
      key: '',
      action: () => {},
      disabled: false,
    },
    {
      label: 'Help',
      id: 'help',
      icon: <IconHelp size="1.25rem" />,
      key: '',
      action: () => {},
      disabled: false,
    },
    { type: 'line' },
    {
      label: 'Github',
      id: 'github',
      icon: <IconBrandGithub size="1.25rem" />,
      key: '',
      action: () => {},
      disabled: false,
      link: 'https://github.com/geekreflex/xoord',
    },
    {
      label: 'Twitter',
      id: 'twitter',
      icon: <IconBrandTwitter size="1.25rem" />,
      key: '',
      action: () => {},
      disabled: false,
      link: 'https://x.com/geekreflex',
    },
  ];

  return (
    <>
      <Menu width={220} offset={20} transitionProps={{ transition: 'pop' }}>
        <Menu.Target>
          <ActionIcon variant={'light'}>
            <IconMenu2 size="1.25rem" />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown py={10}>
          {menuList.map((menu) => {
            if (menu.type && menu.type === 'line') {
              return <Divider my={5} />;
            } else {
              return (
                <Menu.Item icon={menu.icon} key={menu.id} fz="xs" p={8}>
                  <Text>{menu.label}</Text>
                </Menu.Item>
              );
            }
          })}
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
