import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import { TextBoldIcon, TextItalicIcon, TextUnderlineIcon } from '@/icons';
import { styled } from 'styled-components';
import Tooltip from './common/Tooltip';

export default function FontBIU() {
  const dispatch = useAppDispatch();
  const { controller } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);

  const textStyles = [
    {
      name: 'Bold',
      icon: <TextBoldIcon />,
      active: object?.fontWeight === 'bold',
      func: () => {
        controller?.fontWeight();
        const isBold = object?.fontWeight === 'bold';
        dispatch(setObject({ fontWeight: isBold ? 'normal' : 'bold' }));
      },
    },
    {
      name: 'Italic',
      icon: <TextItalicIcon />,
      active: object?.fontStyle === 'italic',
      func: () => {
        controller?.fontStyle();
        const isItalic = object?.fontStyle === 'italic';
        dispatch(setObject({ fontStyle: isItalic ? 'normal' : 'italic' }));
      },
    },
    {
      name: 'Underline',
      icon: <TextUnderlineIcon />,
      active: object?.underline,
      func: () => {
        controller?.underline();
        const isUnderline = object?.underline;
        dispatch(setObject({ underline: !isUnderline }));
      },
    },
  ];
  return (
    <Wrap>
      {textStyles.map((item) => (
        <Tooltip content={item.name}>
          <span
            onClick={item.func}
            className={` ${
              item.active ? 'icon-active' : ''
            } iconn icon-sm biu-icon`}
          >
            {item.icon}
          </span>
        </Tooltip>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  gap: 5px;
  .biu-icon {
    border: 1px solid ${(props) => props.theme.colors.borderColor};
  }
`;
