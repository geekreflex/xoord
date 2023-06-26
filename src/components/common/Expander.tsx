import { styled } from 'styled-components';
import Toggle from './Toggle';
import { ArrowDownIcon } from '@/icons';
import { useEffect, useState } from 'react';
import { LineX } from '@/styles/global';

interface ExpanderProps {
  children: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  label: string;
}

export default function Expander({
  children,
  checked,
  onChange,
  onAdd,
  label,
}: ExpanderProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!checked) {
      setVisible(false);
    }
  }, [checked]);

  useEffect(() => {
    if (visible) {
      onAdd();
    }
  }, [visible]);

  const handleContentVisible = () => {
    setVisible(!visible);
  };

  return (
    <Wrap>
      <div className="expander-main">
        <div className="expander-left">
          <Toggle checked={checked} onChange={onChange} label={label} />
        </div>
        <button className="expander-right arrow" onClick={handleContentVisible}>
          <ArrowDownIcon />
        </button>
      </div>
      {visible && <div className="expander-content">{children}</div>}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 0 10px;
  border-radius: ${(props) => props.theme.radius.small};

  .expander-main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${(props) => props.theme.resets.btnInputHeight};
    border-radius: ${(props) => props.theme.radius.small};
  }

  .expander-right {
    outline: none;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.textColor};
    height: 100%;
    cursor: pointer;
    justify-content: flex-end;
  }

  .expander-left,
  .expander-right {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .expander-content {
    padding: 5px;
    min-height: 50px;
    padding-bottom: 10px;
  }
`;
