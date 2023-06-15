import { styled } from 'styled-components';
import Icon from './shared/Icon';
import Tooltip from './shared/Tooltip';
import Popup from './shared/Popup';
import { useEditorContext } from '@/context/EditorContext';
import { IconName } from '@/types/icon';
import { GridItem, GridItems } from '@/styles/global';
import { useRef, useState } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

interface AlignProps {
  name: string;
  icon: IconName;
  func: () => void;
  alias: string;
}

export default function Align() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  // const { controller } = useEditorContext();

  const handleAlign = (val: string) => {
    // controller?.align(val);
  };

  const aligns: AlignProps[] = [
    {
      name: 'Top',
      icon: 'alignTopIcon',
      func: () => handleAlign('top'),
      alias: 'top',
    },
    {
      name: 'Left',
      icon: 'alignLeftIcon',
      func: () => handleAlign('left'),
      alias: 'left',
    },
    {
      name: 'Middle',
      icon: 'alignHorizontalIcon',
      func: () => handleAlign('horizontal'),
      alias: 'horizontal',
    },
    {
      name: 'Center',
      icon: 'alignVerticalIcon',
      func: () => handleAlign('vertical'),
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

  useClickOutside(ref, () => setVisible(false));

  return (
    <Wrap ref={ref}>
      <div className="align-wrap">
        {visible && (
          <Popup placement="top">
            <div className="align-inner">
              <GridItems>
                {aligns.map((align) => (
                  <GridItem key={align.name}>
                    <Icon name={align.icon} hover={false} />
                    <p>{align.name}</p>
                  </GridItem>
                ))}
              </GridItems>
            </div>
          </Popup>
        )}
      </div>
      <Tooltip content="Align">
        <Icon name="alignLeftIcon" click={() => setVisible(true)} />
      </Tooltip>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .align-wrap {
    display: flex;
    justify-content: center;
  }

  .align-inner {
    width: 300px;
    padding: 0 5px;
  }
`;
