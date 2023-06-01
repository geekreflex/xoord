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
  { name: 'Top', icon: 'alignTopIcon', func: '', alias: 'top' },
  { name: 'Left', icon: 'alignLeftIcon', func: '', alias: 'left' },
  {
    name: 'Middle',
    icon: 'alignHorizontalIcon',
    func: '',
    alias: 'horizontal',
  },
  {
    name: 'Center',
    icon: 'alignVerticalIcon',
    func: '',
    alias: 'vertical',
  },
  { name: 'Bottom', icon: 'alignBottomIcon', func: '', alias: 'bottom' },
  { name: 'Right', icon: 'alignRightIcon', func: '', alias: 'right' },
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
          {aligns.map((align) => (
            <div
              className="item"
              key={align.alias}
              onClick={() => handleAlign(align.alias)}
            >
              <Icon hover={false} name={align.icon} size="big" />
              <p>{align.name}</p>
            </div>
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
