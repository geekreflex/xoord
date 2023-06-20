import useClickOutside from '@/hooks/useClickOutside';
import { useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { styled } from 'styled-components';

interface PopoverProps {
  content: React.ReactNode;
  placement?: string | any;
  children: React.ReactElement;
}

export default function Popover({
  content,
  placement = 'top',
  children,
}: PopoverProps) {
  const ref = useRef(null);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const togglePopover = () => setPopoverVisible((prevState) => !prevState);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrowElement,
        },
      },
    ],
  });

  useClickOutside(ref, () => setPopoverVisible(false));

  return (
    <Wrap ref={ref}>
      <div ref={setReferenceElement} onClick={togglePopover}>
        {children}
      </div>
      {popoverVisible && (
        <div
          ref={setPopperElement}
          className="popover"
          style={{ ...styles.popper }}
          {...attributes.popper}
        >
          <div className="popover-content">{content}</div>
          <div
            ref={setArrowElement}
            className="popover-arrow"
            style={{ ...styles.arrow }}
            {...attributes.arrow}
          ></div>
        </div>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  .popover {
    padding: 5px 5px;
    border-radius: 12px;
    font-size: 12px;
    z-index: 998;
    background-color: ${(props) => props.theme.colors.panelBg};
    color: ${(props) => props.theme.colors.tooltipColor};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    box-shadow: ${(props) => props.theme.shadow.shadow1};
  }

  .popover-arrow {
    /* Todo */
  }
`;
