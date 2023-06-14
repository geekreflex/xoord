import { styled } from 'styled-components';
import Modal from './shared/Modal';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useThemeContext } from '@/context/ThemeContext';
import { toggleLayout, toggleSettingsModal } from '@/features/appSlice';

export default function Settings() {
  const dispatch = useAppDispatch();
  const { layout, settingsModal } = useAppSelector((state) => state.app);
  const { toggleTheme } = useThemeContext();

  const closeModal = () => {
    dispatch(toggleSettingsModal());
  };

  return (
    <Modal title="Settings" visible={settingsModal} close={closeModal}>
      <Wrap>
        <p>Hello from settings modal</p>
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
    </Modal>
  );
}

const Wrap = styled.div`
  width: 350px;
`;
