import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  sin?: string;
  size?: string;
}

export function Input({ value, onChange, sin }: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    onChange(inputValue);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <InputWrap>
      <input value={inputValue} onChange={handleChange} onBlur={handleBlur} />
      <span>{sin}</span>
    </InputWrap>
  );
}

const InputWrap = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: ${(props) => props.theme.radius.medium};
  position: relative;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 0 10px;

  input {
    font-weight: 600;
    border: none;
    outline: none;
    flex: 1;
    width: 100%;
  }

  span {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
`;
