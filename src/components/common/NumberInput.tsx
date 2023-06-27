import { ArrowDownIcon, ArrowUpIcon } from '@/icons';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface NumberInputProps {
  min?: number;
  max?: number;
  value: number;
  label?: string;
  onChange?: (value: number) => void;
}

export default function NumberInput({
  min = 0,
  max = Infinity,
  value,
  label,
  onChange,
}: NumberInputProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  const handleIncrement = () => {
    const parsedValue = inputValue || min;
    const incrementedValue = Number(parsedValue) + 1;
    const newValue = Math.min(max, incrementedValue);
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const parsedValue = inputValue || min;
    const incrementedValue = Number(parsedValue) - 1;
    const newValue = Math.min(max, incrementedValue);
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Wrap>
      <input
        type="number"
        min={min}
        max={max}
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="input-btns">
        <button onClick={handleIncrement} className="arrow">
          <ArrowUpIcon />
        </button>
        <button onClick={handleDecrement} className="arrow">
          <ArrowDownIcon />
        </button>
      </div>
      <div className="input-label">{label}</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  height: 32px;
  display: flex;
  border-radius: ${(props) => props.theme.radius.small};
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
  }

  input {
    border: none;
    outline: none;
    background-color: transparent;
    color: #fff;
    padding: 0 10px;
    width: 100%;
    text-align: right;
  }

  .input-btns {
    display: flex;
    flex-direction: column;
    width: 40px;
    border-left: 1px solid ${(props) => props.theme.colors.borderColor};

    button {
      height: 50%;
      background-color: transparent;
      color: ${(props) => props.theme.colors.textColor};
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: row-resize;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
