import { PANEL_WIDTH } from '@/utils/constants';
import { styled } from 'styled-components';

export default function Panel() {
  return <Wrap width={PANEL_WIDTH}></Wrap>;
}

interface WrapProps {
  width: number;
}

const Wrap = styled.div<WrapProps>`
  width: ${(props) => `${props.width}px`};
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
`;
