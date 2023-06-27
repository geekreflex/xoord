import { LineX } from '@/styles/global';
import { styled } from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
  close: () => void;
  title?: string;
}

export default function Modal({
  children,
  close,
  title = 'Untitled',
}: ModalProps) {
  return (
    <Wrap>
      <div className="overlay" onClick={close}></div>
      <div className="modal-inner">
        <div className="modal-header">
          <h4>{title}</h4>
        </div>
        <LineX margin={0} />
        <div className="modal-main">{children}</div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-header {
    padding: 20px;
  }

  .modal-inner {
    background-color: ${(props) => props.theme.colors.primary};
    position: relative;
    min-width: 300px;
    border-radius: ${(props) => props.theme.radius.small};
  }
`;
