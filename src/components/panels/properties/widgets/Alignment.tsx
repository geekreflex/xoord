import { useEditorContext } from '@/context/EditorContext';
import { IPos } from '@/types/app';
import { styled } from 'styled-components';
import GridItem from '../shared/GridItem';

export default function Alignment() {
  const { controller } = useEditorContext();

  const handleAlign = (val: string) => {
    controller?.align(val);
  };

  const aligns: IPos[] = [
    {
      name: 'Top',
      icon: 'alignTopIcon',
      func: () => handleAlign('top'),
      alias: 'top',
    },
    {
      name: 'Left',
      icon: 'alignLeftIcon',
      func: () => handleAlign('tleftop'),
      alias: 'left',
    },
    {
      name: 'Middle',
      icon: 'alignHorizontalIcon',
      func: () => handleAlign('middle'),
      alias: 'horizontal',
    },
    {
      name: 'Center',
      icon: 'alignVerticalIcon',
      func: () => handleAlign('center'),
      alias: 'vertical',
    },
    {
      name: 'Bottom',
      icon: 'alignBottomIcon',
      func: () => handleAlign('bottom'),
      alias: 'bottom',
    },
    {
      name: 'Right',
      icon: 'alignRightIcon',
      func: () => handleAlign('right'),
      alias: 'right',
    },
  ];

  return (
    <AlignmentWrap>
      <div className="main">
        <GridItem items={aligns} title="Alignment" />
      </div>
    </AlignmentWrap>
  );
}

const AlignmentWrap = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .align-items {
    display: flex;
    justify-content: space-around;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;

    .item {
      display: flex;
      align-items: center;
      padding: 8px 10px;
      gap: 10px;
      border-radius: ${(props) => props.theme.radius.small};
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.colors.hoverColor1};
      }

      p {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
`;
