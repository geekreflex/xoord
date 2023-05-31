import { ObjectTypes } from '@/types/editor';
import { styled } from 'styled-components';
import { FillColorBlock, StrokeColorBlock } from './ColorBlock';

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
      <div className="color-block-wrap">
        {obj && <FillColorBlock shape={obj} />}
        {obj && <StrokeColorBlock shape={obj} />}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .color-block-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
