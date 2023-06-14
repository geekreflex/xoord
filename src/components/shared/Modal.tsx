import { styled } from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <Wrap>
      <div className="overlay"></div>
      <div className="inner">
        <div className="modal-header">
          <h2>Untitled</h2>
        </div>
        <div className="modal-main">{children}</div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
`;
