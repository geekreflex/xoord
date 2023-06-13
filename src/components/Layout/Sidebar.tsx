import { SIDEBAR_WIDTH } from '@/utils/constants';
import { styled } from 'styled-components';

export default function Sidebar() {
  return <Wrap width={SIDEBAR_WIDTH}></Wrap>;
}

interface WrapProps {
  width: number;
}

const Wrap = styled.div<WrapProps>`
  height: 100%;
  width: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.theme.colors.primary};
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
`;
