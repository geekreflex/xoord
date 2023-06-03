import { styled } from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ children, title }: ModalProps) {
  return (
    <ModalWrap>
      <Overlay />
      <ModalInner>
        {title && (
          <>
            <div className="modal-header">
              <h2>{title}</h2>
            </div>
          </>
        )}
        <div className="modal-main">{children}</div>
      </ModalInner>
    </ModalWrap>
  );
}

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 999998;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
const ModalInner = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: ${(props) => props.theme.radius.medium};
  min-width: 300px;

  .modal-header {
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
    padding: 20px;
    h2 {
      font-size: 20px;
      line-height: 1;
    }
  }

  .modal-main {
    padding: 20px;
  }
`;
