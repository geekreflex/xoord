import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  visible: boolean;
  close: () => void;
}

export default function Modal({ children, title, visible, close }: ModalProps) {
  return (
    <AnimatePresence>
      {visible && (
        <Wrap visible={visible}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overlay"
            onClick={close}
          ></motion.div>
          <motion.div
            className="inner"
            initial={{ y: '1000px', scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: '1000px', scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h3>{title}</h3>
            </div>
            <div className="modal-main">{children}</div>
          </motion.div>
        </Wrap>
      )}
    </AnimatePresence>
  );
}

interface WrapProps {
  visible: boolean;
}

const Wrap = styled.div<WrapProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 99998;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .inner {
    position: relative;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.radius.medium};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    padding: 20px;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};

    h3 {
      font-weight: 400;
      font-size: 20px;
    }
  }

  .modal-main {
    padding: 20px;
  }
`;
