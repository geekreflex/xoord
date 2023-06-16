import { styled } from 'styled-components';
import Icon from './shared/Icon';
import Tooltip from './shared/Tooltip';
import Popup from './shared/Popup';
import { useEditorContext } from '@/context/EditorContext';
import { GridItem, GridItems, LineX, TitleSmall } from '@/styles/global';
import { useRef, useState } from 'react';
import useClickOutside from '@/hooks/useClickOutside';
import { GridItemProps } from '@/types/app';

export default function Align() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const { controller } = useEditorContext();

  const handleAlign = (val: string) => {
    controller?.align(val);
  };

  const aligns: GridItemProps[] = [
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

  const orders: GridItemProps[] = [
    { name: 'Forward', icon: 'forwardIcon', func: () => {}, alias: 'forward' },
    {
      name: 'Backwards',
      icon: 'backwardIcon',
      func: () => {},
      alias: 'backward',
    },
    {
      name: 'Front',
      icon: 'bringFrontIcon',
      func: () => {},
      alias: 'bring-front',
    },
    {
      name: 'Back',
      icon: 'sendBackIcon',
      func: () => {},
      alias: 'send-back',
    },
  ];

  useClickOutside(ref, () => setVisible(false));

  return (
    <Wrap ref={ref}>
      <div className="align-wrap">
        {visible && (
          <Popup placement="top" offset={60}>
            <div className="align-inner">
              <div>
                <TitleSmall>Align</TitleSmall>
                <GridItems>
                  {aligns.map((align) => (
                    <GridItem key={align.name} onClick={align.func}>
                      <Icon name={align.icon} hover={false} />
                      <p>{align.name}</p>
                    </GridItem>
                  ))}
                </GridItems>
              </div>
              <LineX />
              <div>
                <TitleSmall>Layer</TitleSmall>
                <GridItems>
                  {orders.map((order) => (
                    <GridItem key={order.name} onClick={order.func}>
                      <Icon name={order.icon} hover={false} />
                      <p>{order.name}</p>
                    </GridItem>
                  ))}
                </GridItems>
              </div>
            </div>
          </Popup>
        )}
      </div>
      <Tooltip content="Align and Layer">
        <Icon name="alignLeftIcon" click={() => setVisible(true)} />
      </Tooltip>
    </Wrap>
  );
}

const Wrap = styled.div`
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
