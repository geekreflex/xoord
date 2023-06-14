import { SIDEBAR_WIDTH } from '@/utils/constants';
import { styled } from 'styled-components';
import Tools from '../Tools';
import { useAppSelector } from '@/app/hooks';

export default function Sidebar() {
  const { layout } = useAppSelector((state) => state.app);
  return (
    <Wrap width={SIDEBAR_WIDTH} layout={layout}>
      <Tools />
    </Wrap>
  );
}

interface WrapProps {
  width: number;
  layout: string;
}

const Wrap = styled.div<WrapProps>`
  height: 100%;
  width: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.theme.colors.primary};
  border-right: 1px solid
    ${(props) =>
      props.layout === 'left' ? props.theme.colors.borderColor : 'none'};
  border-left: 1px solid
    ${(props) =>
      props.layout === 'right' ? props.theme.colors.borderColor : 'none'};
  order: ${(props) => (props.layout === 'right' ? 2 : 1)};
`;
