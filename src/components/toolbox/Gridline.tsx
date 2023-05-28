import { styled } from 'styled-components';
import Icon from '../common/Icon';
import { useEditor } from '@/context/EditorContext';

export default function Gridline() {
  const { gridLine } = useEditor();
  const shwo = () => {
    gridLine?.toggleGrid(true);
  };
  return (
    <GridWrap>
      <Icon name="grid1Icon" click={shwo} />
    </GridWrap>
  );
}

const GridWrap = styled.div``;
