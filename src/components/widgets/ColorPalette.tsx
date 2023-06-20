import ColorPicker from 'react-best-gradient-color-picker';
import Popover from '../shared/Popover';

export default function ColorPalette() {
  const color = 'red';
  const onChange = (color: string) => {
    console.log(color);
  };
  return (
    <Popover
      placement="top"
      content={
        <div className="color-picker-wrap">
          <ColorPicker
            width={230}
            value={color}
            onChange={onChange}
            hideColorGuide={true}
            hideAdvancedSliders={true}
            hidePresets={true}
            hideInputType={false}
            hideInputs={true}
          />
        </div>
      }
    >
      <p>Hi</p>
    </Popover>
  );
}
