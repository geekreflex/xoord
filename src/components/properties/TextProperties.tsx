import { useEditorContext } from '@/context/EditorContext';
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@/icons';
import TextAlignJustify from '@/icons/TextAlignJustify';
import { styled } from 'styled-components';
import Tooltip from '../shared/Tooltip';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setObject } from '@/features/editorSlice';

export default function TextProperties() {
  const dispatch = useAppDispatch();
  const { controller } = useEditorContext();
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

  const onTextAlign = (align: string) => {
    controller?.textAlign(align);
    dispatch(setObject({ textAlign: align }));
  };

  return (
    <Wrap>
      <div className="text-align-wrap">
        {textAligns.map((item) => (
          <Tooltip key={item.alignment} content={item.name} placement="right">
            <span
              key={item.alignment}
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
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  .text-align-wrap {
    display: flex;
    gap: 5px;
    span {
      width: 40px;
      height: 40px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .active {
    border: 1px solid red;
  }
`;
