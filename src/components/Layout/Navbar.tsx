import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useThemeContext } from '@/context/ThemeContext';
import { toggleLayout } from '@/features/appSlice';
import { NAVBAR_HEIGHT } from '@/utils/constants';
import { styled } from 'styled-components';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { layout } = useAppSelector((state) => state.app);
  const { toggleTheme } = useThemeContext();

  return (
    <Wrap height={NAVBAR_HEIGHT}>
      <button onClick={toggleTheme}>toggle theme</button>
      <button
        onClick={() => {
          dispatch(toggleLayout());
        }}
      >
        toggle layout
      </button>
      <p>{layout}</p>
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
