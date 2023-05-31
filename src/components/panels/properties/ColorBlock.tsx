import ToggleSwitch from '@/components/common/ToggleSwitch';
import { ObjectTypes } from '@/types/editor';
import { styled } from 'styled-components';

export default function ColorBlock({
  color,
  type,
}: {
  color: any;
  type: ObjectTypes;
}) {
  const handleRemoveColor = () => {
    console.log('removed color');
  };

  return (
    <BlockWrap title={type}>
      <div className="block" style={{ backgroundColor: color }}></div>
      <ToggleSwitch checked={!!color} onChange={handleRemoveColor} />
    </BlockWrap>
  );
}

const BlockWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .block {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;
