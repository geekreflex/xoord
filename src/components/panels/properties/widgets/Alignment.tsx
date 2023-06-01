import Icon from '@/components/common/Icon';
import { useEditorContext } from '@/context/EditorContext';
import { IconName } from '@/types/icons';
import { styled } from 'styled-components';

interface AlignTypes {
  name: string;
  icon: IconName;
  func: string;
  alias: string;
}

const aligns: AlignTypes[] = [
  { name: 'Align Left', icon: 'alignLeftIcon', func: '', alias: 'left' },
  {
    name: 'Align Vertical',
    icon: 'alignVerticalIcon',
    func: '',
    alias: 'vertical',
  },
  { name: 'Align Right', icon: 'alignRightIcon', func: '', alias: 'right' },
  { name: 'Align Top', icon: 'alignTopIcon', func: '', alias: 'top' },
  {
    name: 'Align Horizontal',
    icon: 'alignHorizontalIcon',
    func: '',
    alias: 'horizontal',
  },
  { name: 'Align Bottom', icon: 'alignBottomIcon', func: '', alias: 'bottom' },
];

export default function Alignment() {
  const { controller } = useEditorContext();

  const handleAlign = (val: string) => {
    controller?.align(val);
  };

  return (
    <AlignmentWrap>
      <div className="main">
        <div className="align-items">
          {aligns.slice(0, 3).map((align) => (
            <Icon
              key={align.alias}
              name={align.icon}
              size="big"
              click={() => handleAlign(align.alias)}
            />
          ))}
        </div>
        <div className="align-items">
          {aligns.slice(3, 6).map((align) => (
            <Icon
              key={align.alias}
              name={align.icon}
              size="big"
              click={() => handleAlign(align.alias)}
            />
          ))}
        </div>
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
  }
`;
