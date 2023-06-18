import { styled } from 'styled-components';
import Color from './Color';
import { useAppSelector } from '@/app/hooks';

export default function Stroke() {
  const { object } = useAppSelector((state) => state.editor);

  const onStrokeChange = (color: string) => {
    console.log(color);
  };

  return (
    <Wrap>
      <Color color={object?.fill as string} onChange={onStrokeChange} />
    </Wrap>
  );
}

const Wrap = styled.div``;
