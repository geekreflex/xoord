import { useEditorContext } from '@/context/EditorContext';
import { Group, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function DropArea() {
  const { editor } = useEditorContext();
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const theme = useMantineTheme();

  useEffect(() => {
    if (files && files.length > 0) {
      files.map((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const imgElement = document.createElement('img');
          imgElement.onload = () => {
            const fabricImage = new fabric.Image(imgElement);
            fabricImage.scaleToWidth(editor?.workspaceEl?.offsetWidth! / 5);
            fabricImage.set({ name: 'image' });
            if (editor) {
              editor.canvas.add(fabricImage);
              editor.canvas.centerObject(fabricImage);
              editor.canvas.setActiveObject(fabricImage);
            }
          };
          imgElement.src = reader.result as string;
        };
        reader.readAsDataURL(file);
      });
    }
  }, [files]);

  return (
    <Dropzone.FullScreen
      active={true}
      accept={IMAGE_MIME_TYPE}
      onDrop={(files) => {
        console.log(files);
        setFiles(files);
      }}
    >
      <Group
        position="center"
        spacing="xl"
        mih={220}
        sx={{ pointerEvents: 'none' }}
      >
        <Dropzone.Accept>
          <IconUpload
            size="3.2rem"
            stroke={1.5}
            color={
              theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 4 : 6
              ]
            }
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size="3.2rem"
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size="3.2rem" stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone.FullScreen>
  );
}
