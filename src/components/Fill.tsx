import { useAppSelector } from '@/app/hooks';
import { styled } from 'styled-components';
import Color from './Color';

export default function Fill() {
  const { object } = useAppSelector((state) => state.editor);

  const onFillChange = (color: string) => {
    console.log('fill changed', color);
  };

  return (
    <Wrap>
      <Color color={object?.fill as string} onChange={onFillChange} />
    </Wrap>
  );
}

const Wrap = styled.div``;
