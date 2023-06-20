import { styled } from 'styled-components';

export default function PropertiesPanel() {
  return <Wrap></Wrap>;
}

const Wrap = styled.div`
  position: fixed;
  width: 250px;
  height: 90vh;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.medium};
  z-index: 9;
`;
