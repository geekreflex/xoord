import { styled } from 'styled-components';

export default function DesignPreview() {
  return <Wrap></Wrap>;
}

const Wrap = styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
`;
