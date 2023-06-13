import { useAppSelector } from '@/app/hooks';
import { PANEL_WIDTH } from '@/utils/constants';
import { styled } from 'styled-components';

export default function Panel() {
  const { layout } = useAppSelector((state) => state.app);
  return <Wrap width={PANEL_WIDTH} layout={layout}></Wrap>;
}

interface WrapProps {
  width: number;
  layout: string;
}

const Wrap = styled.div<WrapProps>`
  width: ${(props) => `${props.width}px`};
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-right: 1px solid
    ${(props) =>
      props.layout === 'left' ? props.theme.colors.borderColor : 'none'};
  border-left: 1px solid
    ${(props) =>
      props.layout === 'right' ? props.theme.colors.borderColor : 'none'};
  padding: 5px;
  order: ${(props) => (props.layout === 'right' ? 1 : 2)};
`;
