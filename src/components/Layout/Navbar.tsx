import { NAVBAR_HEIGHT } from '@/utils/constants';
import { styled } from 'styled-components';

export default function Navbar() {
  return (
    <Wrap height={NAVBAR_HEIGHT}>
      <p>Navbar</p>
    </Wrap>
  );
}

interface WrapProps {
  height: number;
}

const Wrap = styled.div<WrapProps>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;
