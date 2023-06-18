import { useEditorContext } from '@/context/EditorContext';
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from '@/icons';
import TextAlignJustify from '@/icons/TextAlignJustify';
import { styled } from 'styled-components';
import Tooltip from '../shared/Tooltip';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setObject } from '@/features/editorSlice';
import NumberInput from '../shared/NumberInput';
import { useEffect } from 'react';
import { fabric } from 'fabric';
import FontList from '../FontList';
import Fill from '../Fill';
import Outline from '../Outline';

export default function TextProperties() {
  const dispatch = useAppDispatch();
  const { controller, editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);

  const textAligns = [
    { name: 'Align Left', alignment: 'left', icon: <TextAlignLeftIcon /> },
    {
      name: 'Align Center',
      alignment: 'center',
      icon: <TextAlignCenterIcon />,
    },
    { name: 'Align Right', alignment: 'right', icon: <TextAlignRightIcon /> },
    { name: 'Align Justify', alignment: 'justify', icon: <TextAlignJustify /> },
  ];

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

  const onTextAlign = (align: string) => {
    controller?.textAlign(align);
    dispatch(setObject({ textAlign: align }));
  };

  const onFontSize = (size: number) => {
    controller?.fontSize(size);
    dispatch(setObject({ fontSize: size }));
  };

  useEffect(() => {
    if (editor) {
      editor.canvas.on('object:scaling', (e: fabric.IEvent) => {
        const target = e.target as fabric.Textbox;
        if (target instanceof fabric.Textbox) {
          dispatch(setObject({ fontSize: target.fontSize }));
          const scaleFactor = target.scaleX!;
          const originalFontSize = target.fontSize;
          const newFontSize = (originalFontSize! * scaleFactor).toFixed(1);
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

  return (
    <Wrap>
      <FontList />
      <div className="text-tweak">
        <div className="text-align-wrap">
          {textStyles.map((item) => (
            <Tooltip key={item.name} content={item.name} placement={'right'}>
              <span
                onClick={item.func}
                className={`${item.active ? 'active' : ''}`}
              >
                {item.icon}
              </span>
            </Tooltip>
          ))}
        </div>
        <div className="text-align-wrap">
          {textAligns.map((item) => (
            <Tooltip key={item.alignment} content={item.name} placement="right">
              <span
                onClick={() => onTextAlign(item.alignment)}
                className={`${
                  object?.textAlign === item.alignment ? 'active' : ''
                }`}
              >
                {item.icon}
              </span>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="props">
        <NumberInput value={object?.fontSize || 0} onChange={onFontSize} />
        <Fill />
      </div>
      <Outline />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 10px;

  .text-tweak {
    display: flex;
    justify-content: space-between;
  }

  .text-align-wrap {
    display: flex;
    gap: 5px;
    span {
      padding: 5px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: ${(props) => props.theme.radius.medium};
      &:hover {
        background-color: ${(props) => props.theme.colors.hoverColor};
      }
    }

    .active {
      border: 1px solid ${(props) => props.theme.colors.accent}30;
      background-color: ${(props) => props.theme.colors.accent}20;
      &:hover {
        background-color: ${(props) => props.theme.colors.accent}20;
      }
    }
  }

  .props {
    display: flex;
    gap: 10px;
  }
`;
