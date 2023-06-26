import { ArrowDownIcon } from '@/icons';
import { styled } from 'styled-components';

interface SelectProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (style: string) => void;
}

export default function Select({ options, value, onChange }: SelectProps) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <Wrap>
      <select name="" id="" value={value} onChange={handleSelect}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className="arr-wrap">
        <span className="arr-down-icon">
          <ArrowDownIcon />
        </span>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${(props) => props.theme.resets.btnInputHeight};
  select {
    position: relative;
    width: 100%;
    border: none;
    height: 100%;
    outline: none;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textColor};
    padding: 0 10px;
    border-radius: ${(props) => props.theme.radius.small};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    appearance: none;
    cursor: pointer;
  }

  .arr-wrap {
    position: absolute;
    right: 0;
    height: 100%;
    width: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
`;
