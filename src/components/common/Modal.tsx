import { LineX } from '@/styles/global';
import { styled } from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <Wrap>
      <div className="overlay"></div>
      <div className="modal-inner">
        <div className="modal-header">
          <h4>Resize Template</h4>
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
    background-color: ${(props) => props.theme.colors.secondary};
    position: relative;
    min-width: 300px;
    border-radius: ${(props) => props.theme.radius.small};
  }
`;
