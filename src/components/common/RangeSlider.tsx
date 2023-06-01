import { styled } from 'styled-components';

interface RangeSliderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
  value: string;
}

export default function RangeSlider({
  onChange,
  min = '1',
  max = '100',
  value,
}: RangeSliderProps) {
  return (
    <RangeWrap>
      <input
        type="range"
        min={min}
        value={value}
        max={max}
        id="range"
        onChange={onChange}
      />
    </RangeWrap>
  );
}

const RangeWrap = styled.div`
  input {
    appearance: none;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background-color: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2;
    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #ffffff;
      border: 1px solid ${(props) => props.theme.colors.borderColor2};
      cursor: pointer;
    }
  }
`;
