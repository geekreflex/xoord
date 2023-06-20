import { NAVBAR_HEIGHT } from '@/utils/constants';
import { styled } from 'styled-components';
import Align from '../Align';
import FlipRotate from '../FlipRotate';
import { Delete, Duplicate, Lock } from '../toolbox';

export default function Navbar() {
  return (
    <Wrap height={NAVBAR_HEIGHT}>
      <div>Awesome Editor</div>
      <div className="object-tools">
        <Align />
        <FlipRotate />
        <Duplicate />
        <Lock />
        <Delete />
      </div>
      <div>Right Side</div>
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
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .object-tools {
    display: flex;
    gap: 5px;
  }
`;
