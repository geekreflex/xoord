import { styled } from 'styled-components';

interface RangeSliderProps {
  min: number;
  max: number;
  value: number;
  step?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RangeSlider({
  min = 0,
  max = 100,
  value,
  step = 1,
  onChange,
}: RangeSliderProps) {
  return (
    <Wrap>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={onChange}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  display: flex;
  height: 22px;
  align-items: center;

  input[type='range'] {
    appearance: none;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.textColor};
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2;
    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.primary};
      border: 2px solid ${(props) => props.theme.colors.textColor};
      cursor: pointer;
      transition: all 300ms;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
