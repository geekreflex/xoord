import ColorPicker from 'react-best-gradient-color-picker';
import { styled } from 'styled-components';

export default function Color({
  onChange,
  color,
}: {
  color: any;
  onChange: any;
}) {
  const handleChange = (color: any) => {
    console.log(color);
    onChange(color);
  };

  return (
    <ColorWrap>
      <ColorPicker value={color} onChange={handleChange} />
    </ColorWrap>
  );
}

const ColorWrap = styled.div`
  position: absolute;
  top: 20;
  right: 0;
  padding: 20px;
  z-index: 999;
`;
