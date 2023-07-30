import { useAppStore } from '@/store/appStore';
import { ActionIcon, Anchor, Divider, Menu, Text } from '@mantine/core';
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
  const { openExportModal, openHelpModal } = useAppStore((state) => state);

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
      label: 'Save to',
      id: 'save',
      icon: <IconDownload size="1.25rem" />,
      key: '',
      action: () => {},
      disabled: true,
    },
    {
      label: 'Export Design',
      id: 'export',
      icon: <IconPhotoDown size="1.25rem" />,
      key: '',
      action: openExportModal,
      disabled: false,
    },
    {
      label: 'Help',
      id: 'help',
      icon: <IconHelp size="1.25rem" />,
      key: '',
      action: openHelpModal,
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
      <Menu
        width={220}
        offset={20}
        transitionProps={{ transition: 'pop' }}
        withArrow
      >
        <Menu.Target>
          <ActionIcon variant={'light'}>
            <IconMenu2 size="1.25rem" />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown py={10}>
          {menuList.map((menu, index) => {
            if (menu.type && menu.type === 'line') {
              return <Divider key={index} my={5} />;
            } else {
              if (menu.link) {
                return (
                  <Anchor
                    key={menu.id}
                    c="inherit"
                    href={menu.link}
                    underline={false}
                    target="_blank"
                  >
                    <Menu.Item
                      icon={menu.icon}
                      fz="xs"
                      py={6}
                      px={10}
                      disabled={menu.disabled}
                    >
                      {menu.label}
                    </Menu.Item>
                  </Anchor>
                );
              }
              return (
                <Menu.Item
                  icon={menu.icon}
                  key={menu.id}
                  fz="xs"
                  py={6}
                  px={10}
                  disabled={menu.disabled}
                  onClick={menu.action}
                >
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
