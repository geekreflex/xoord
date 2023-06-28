import { Button } from '@/styles/global';
import { IoDownloadOutline } from 'react-icons/io5';
import { styled } from 'styled-components';

export default function TopBar() {
  return (
    <Wrap>
      <Button>
        <span id="btn-icon">
          <IoDownloadOutline />
        </span>
        <span id="btn-text">Download </span>
      </Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-width: 400px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.small};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  justify-content: flex-end;
`;
