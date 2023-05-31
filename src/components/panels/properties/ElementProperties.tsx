import { ObjectTypes } from '@/types/editor';
import { styled } from 'styled-components';

export default function ElementProperties({
  object,
  type,
}: {
  object: fabric.Object[] | undefined;
  type: ObjectTypes;
}) {
  const obj = object && object[0]!;
  return (
    <Wrap>
      <span>{type}</span>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: `${obj?.fill}`,
          border: '1px solid #888',
        }}
      ></div>
    </Wrap>
  );
}

const Wrap = styled.div``;
