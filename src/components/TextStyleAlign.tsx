import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextAlignJustify,
} from '@/icons';
import Switch from './common/Switch';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useEditorContext } from '@/context/EditorContext';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setObject } from '@/features/editorSlice';

export default function TextStyleAlgin() {
  const dispatch = useAppDispatch();
  const { object } = useAppSelector((state) => state.editor);
  const { controller } = useEditorContext();
  const [activeItem, setActiveItem] = useState('');

  const items = [
    { label: 'Text Align Left', icon: <TextAlignLeftIcon />, alias: 'left' },
    {
      label: 'Text Align Center',
      icon: <TextAlignCenterIcon />,
      alias: 'center',
    },
    { label: 'Text Align Right', icon: <TextAlignRightIcon />, alias: 'right' },
    {
      label: 'Text Align Justify',
      icon: <TextAlignJustify />,
      alias: 'justify',
    },
  ];

  useEffect(() => {
    if (object) {
      setActiveItem(object.textAlign as string);
    }
  }, [object]);

  const handleSwitch = (align: string) => {
    setActiveItem(align);
    controller?.textAlign(align);
    dispatch(setObject({ textAlign: align }));
  };

  return (
    <Wrap>
      <Switch items={items} activeItem={activeItem} onSwitch={handleSwitch} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
`;
