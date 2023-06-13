import { FOOTER_HEIGHT } from '@/utils/constants';
import { styled } from 'styled-components';
import Zoom from '../Zoom';

export default function Footer() {
  return (
    <Wrap height={FOOTER_HEIGHT}>
      <Zoom />
    </Wrap>
  );
}

interface WrapProps {
  height: number;
}

const Wrap = styled.div<WrapProps>`
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.theme.colors.primary};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  justify-content: space-between;
`;
