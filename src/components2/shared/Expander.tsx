import { styled } from 'styled-components';
import ToggleSwitch from './ToggleSwitch';
import { ArrowDownIcon, ArrowUpIcon } from '@/icons';
import { useRef, useState } from 'react';

interface ExpanderProps {
  children: React.ReactNode;
  checked: boolean;
  onChange: (val: boolean) => void;
  label?: string;
}

export default function Expander({
  children,
  checked,
  onChange,
  label = 'Untitled',
}: ExpanderProps) {
  const [open, setOpen] = useState(false);
  const viewRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => {
    const panel = viewRef.current;
    if (panel && panel.style.maxHeight) {
      panel.style.maxHeight = '0';
    }
  };

  return (
    <Wrap open={open}>
      <div className="expand-block" onClick={toggle}>
        <div className="expand-block-content">
          <ToggleSwitch checked={checked} onChange={() => {}} />
          <p>{label}</p>
        </div>
        <span className="arr-icon">
          {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </span>
      </div>
      <div className="expand-view" ref={viewRef}>
        <div className="expand-view-inner">{children}</div>
      </div>
    </Wrap>
  );
}

interface WrapProps {
  open: boolean;
}

const Wrap = styled.div<WrapProps>`
  overflow: hidden;
  .expand-block {
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    height: 35px;
    display: flex;
    align-items: center;
    /* padding: 0 10px; */
    justify-content: space-between;
    border-radius: ${(props) => props.theme.radius.medium};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.hoverColor}50;
    }

    .expand-block-content,
    .arr-icon {
      height: 100%;
    }

    .expand-block-content {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-left: 10px;
      flex: 1;
    }

    .arr-icon {
      width: 30%;
      font-size: 11px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 10px;
      path {
        stroke-width: 4px;
      }
    }
  }
  .expand-view {
    background-color: ${(props) => props.theme.colors.secondary};
    overflow: auto;
    transition: all 300ms;
    max-height: 0;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-top: 'none';
    .expand-view-inner {
      padding: 10px;
    }
  }
`;
