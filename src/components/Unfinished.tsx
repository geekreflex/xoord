import { useEditorContext } from '@/context/EditorContext';
import {
  Button,
  Divider,
  Group,
  Modal,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';

export default function Unfinished() {
  const { editor } = useEditorContext();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  useEffect(() => {
    if (editor) {
      const savedDesign = localStorage.getItem('editor-state');
      if (savedDesign) {
        const parsedDesign = JSON.parse(savedDesign);
        if (parsedDesign.objects && parsedDesign.objects.length > 0) {
          open();
        }
      }

      editor.canvas.on('before:render', () => {
        saveDesignToLocalStorage();
      });
    }
  }, [editor]);

  const saveDesignToLocalStorage = () => {
    if (editor) {
      const jsonDesign = JSON.stringify(editor.canvas.toDatalessJSON());
      localStorage.setItem('editor-state', jsonDesign);
    }
  };

  const handleClearSavedDesign = () => {
    localStorage.removeItem('editor-state');
  };

  const handleLoadSavedDesign = () => {
    close();
    const savedDesign = localStorage.getItem('editor-state');
    if (savedDesign) {
      editor?.canvas.loadFromJSON(savedDesign, () => {
        editor.canvas.renderAll();
      });
    }
  };

  const handleNewDesign = () => {
    close();
    handleClearSavedDesign();
    editor?.canvas.clear();
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      zIndex={99999}
      overlayProps={{
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
    >
      <Modal.Body>
        <Text>
          We found an ongoing project from your previous session. Would you like
          to resume editing this project or begin a new one?
        </Text>
        <Divider my={20} orientation="horizontal" />
        <Group position="right">
          <Button variant="default" onClick={handleNewDesign}>
            Start New
          </Button>
          <Button onClick={handleLoadSavedDesign}>Continue Editing</Button>
        </Group>
      </Modal.Body>
    </Modal>
  );
}
