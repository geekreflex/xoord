import { styled } from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <Wrap>
      <div className="overlay"></div>
      <div className="modal-inner">
        <div className="modal header"></div>
        <div className="modal-main">{children}</div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;
