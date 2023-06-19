import { styled } from 'styled-components';
import ToggleSwitch from './ToggleSwitch';
import { ArrowDownIcon, ArrowUpIcon } from '@/icons';
import { useState } from 'react';

interface ExpanderProps {
  children: React.ReactNode;
  checked: boolean;
  onChange: () => {};
  label?: string;
}

export default function Expander({
  children,
  checked,
  onChange,
  label = 'Untitled',
}: ExpanderProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!open);
  };

  return (
    <Wrap open={open}>
      <div className="expand-block" onClick={onOpen}>
        <div className="expand-block-content">
          <ToggleSwitch checked={checked} onChange={onChange} />
          <p>{label}</p>
        </div>
        <span className="arr-icon">
          {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </span>
      </div>
      <div className="expand-view">
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
    padding: 0 10px;
    justify-content: space-between;
    border-radius: ${(props) => props.theme.radius.medium};
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors.hoverColor}50;
    }

    .expand-block-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .arr-icon {
      font-size: 11px;
      display: flex;
      path {
        stroke-width: 4px;
      }
    }
  }
  .expand-view {
    background-color: ${(props) => props.theme.colors.secondary};
    overflow: hidden;
    transition: all 200ms;
    min-height: ${(props) => (props.open ? '100px' : 0)};
    max-height: ${(props) => (props.open ? '300px' : 0)};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-top: ${(props) => (props.open ? 'none' : 'none')};
    border: ${(props) => (props.open ? '' : 'none')};
    opacity: ${(props) => (props.open ? 1 : 0)};
    .expand-view-inner {
      padding: 5px;
    }
  }
`;
