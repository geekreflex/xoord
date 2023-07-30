import { useAppStore } from '@/store/appStore';
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  Radio,
  ScrollArea,
  Slider,
  Stack,
  Text,
  TextInput,
  createStyles,
  rem,
  useMantineTheme,
} from '@mantine/core';
import Preview from './Preview';
import { useEditorContext } from '@/context/EditorContext';
import { useState } from 'react';

const useStyles = createStyles(() => ({
  flexBox: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  flexFull: {
    flex: 1,
  },
}));

export default function ExportDesign() {
  const { editor } = useEditorContext();
  const [filename, setFilename] = useState('Export-Design');
  const [format, setFormat] = useState('png');
  const [quality, setQuality] = useState(80);
  const { exportModal, closeExportModal } = useAppStore((state) => state);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const handleExport = () => {
    if (editor) {
      const { canvas } = editor;
      const image = canvas.toDataURL({
        format: format,
      });
      const downloadLink = document.createElement('a');
      downloadLink.href = image;
      downloadLink.download = `${filename}.${format.toLowerCase()}`;
      downloadLink.click();
    }
  };

  return (
    <>
      <Modal
        withCloseButton={false}
        zIndex={9999}
        opened={exportModal}
        onClose={closeExportModal}
        padding={0}
        size={1000}
        radius="lg"
        overlayProps={{
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        centered
      >
        <ScrollArea>
          <Modal.Header p={20}>
            <Text fw="bold" fz="md">
              Export Design
            </Text>
            <Modal.CloseButton />
          </Modal.Header>
          <Divider mb={20} />
          <Modal.Body p={30}>
            <Grid gutter={50}>
              <Grid.Col span={8}>
                <Preview />
              </Grid.Col>
              <Grid.Col span={4}>
                <Box className={classes.flexBox}>
                  <Stack spacing={10} className={classes.flexFull}>
                    <TextInput
                      label={<Text>Filename</Text>}
                      value={filename}
                      onChange={(e) => setFilename(e.target.value)}
                    />
                    <Radio.Group
                      name="exportTypeSelection"
                      label="Format"
                      value={format}
                      onChange={setFormat}
                    >
                      <Stack mt="xs" dir="column">
                        <Radio value="png" size="xs" fw="bold" label="PNG" />
                        <Radio value="svg" size="xs" fw="bold" label="SVG" />
                        <Radio value="jpeg" size="xs" fw="bold" label="JPEG" />
                      </Stack>
                    </Radio.Group>

                    {format === 'jpeg' && (
                      <>
                        <Text size="sm">Quality</Text>
                        <Slider
                          label={quality}
                          min={10}
                          max={100}
                          step={5}
                          value={quality}
                          onChange={setQuality}
                          size={4}
                          styles={(theme) => ({
                            thumb: {
                              height: rem(16),
                              width: rem(16),
                              backgroundColor: theme.white,
                              borderWidth: rem(1),
                              boxShadow: theme.shadows.sm,
                            },
                          })}
                        />
                      </>
                    )}
                  </Stack>
                  <Group mt={20} position="right">
                    <Button variant="default">Canvas</Button>
                    <Button onClick={handleExport}>Export</Button>
                  </Group>
                </Box>
              </Grid.Col>
            </Grid>
          </Modal.Body>
        </ScrollArea>
      </Modal>
    </>
  );
}
