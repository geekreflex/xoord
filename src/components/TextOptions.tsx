import { useEditorContext } from '@/context/EditorContext';
import { fonts } from '@/data/fonts';
import {
  ActionIcon,
  Button,
  Group,
  Popover,
  Space,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconChevronRight,
  IconItalic,
  IconUnderline,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function TextOptions() {
  const { editor, selectedObject, tool } = useEditorContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [align, setAlign] = useState('');

  useEffect(() => {
    setIsBold((selectedObject?.fontWeight as string) === 'bold' ? true : false);
    setIsItalic(
      (selectedObject?.fontStyle as string) === 'italic' ? true : false
    );
    setIsUnderlined(selectedObject?.underline === true ? true : false);
    setAlign(selectedObject?.textAlign as string);
  }, [selectedObject]);

  useEffect(() => {
    if (editor) {
      editor.canvas.on('object:scaling', (e: fabric.IEvent) => {
        const target = e.target as fabric.Textbox;
        if (target instanceof fabric.Textbox) {
          const scaleFactor = target.scaleX!;
          const originalFontSize = target.fontSize;
          const newFontSize = (originalFontSize! * scaleFactor).toFixed();
          target.set('fontSize', parseFloat(newFontSize));
          target.set('width', scaleFactor * target.width!);
          target.set('scaleX', 1);
          target.set('scaleY', 1);
          target.setCoords();
          target.canvas?.requestRenderAll();
        }
      });
    }
  }, [editor]);

  const handleBold = () => {
    if (tool) {
      tool.fontWeight();
      setIsBold((b) => !b);
    }
  };

  const handleUnderline = () => {
    if (tool) {
      tool.underline();
      setIsUnderlined((u) => !u);
    }
  };

  const handleItalic = () => {
    if (tool) {
      tool.fontStyle();
      setIsItalic((i) => !i);
    }
  };

  const handleAlign = (align: string) => {
    if (tool) {
      tool.textAlign(align);
      setAlign(align);
    }
  };

  return (
    <Stack spacing={10}>
      <Popover width={230} withArrow>
        <Popover.Target>
          <Button
            fullWidth
            variant="default"
            px={8}
            py={10}
            c="#999"
            styles={{
              inner: {
                width: '100%',
                justifyContent: 'space-between',
              },
            }}
            rightIcon={<IconChevronRight size="1rem" />}
          >
            <Text ff="Lugrasimo" size="sm">
              Lugrasimo
            </Text>
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          {fonts.map((font) => (
            <Text key={font.value} ff={font.value}>
              {font.label}
            </Text>
          ))}
        </Popover.Dropdown>
      </Popover>

      <Group spacing={3}>
        <Tooltip label="Bold" position="bottom" withArrow>
          <ActionIcon
            onClick={handleBold}
            variant={isBold ? 'filled' : 'light'}
          >
            <IconBold size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Underline" position="bottom" withArrow>
          <ActionIcon
            onClick={handleUnderline}
            variant={isUnderlined ? 'filled' : 'light'}
          >
            <IconUnderline size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Italic" position="bottom" withArrow>
          <ActionIcon
            onClick={handleItalic}
            variant={isItalic ? 'filled' : 'light'}
          >
            <IconItalic size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Space w="5px" />
        <Tooltip label="Align left" position="bottom" withArrow>
          <ActionIcon
            variant={align === 'left' ? 'filled' : 'light'}
            onClick={() => handleAlign('left')}
          >
            <IconAlignLeft size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Align center" position="bottom" withArrow>
          <ActionIcon
            variant={align === 'center' ? 'filled' : 'light'}
            onClick={() => handleAlign('center')}
          >
            <IconAlignCenter size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Justified" position="bottom" withArrow>
          <ActionIcon
            variant={align === 'justified' ? 'filled' : 'light'}
            onClick={() => handleAlign('justified')}
          >
            <IconAlignJustified size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Align right" position="bottom" withArrow>
          <ActionIcon
            variant={align === 'right' ? 'filled' : 'light'}
            onClick={() => handleAlign('right')}
          >
            <IconAlignRight size="1.25rem" />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Stack>
  );
}
