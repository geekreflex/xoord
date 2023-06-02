import { styled } from 'styled-components';
import { Gridline } from './toolbox';
import ResizeCanvas from './toolbox/ResizeCanvas';
import Layers from './toolbox/Layers';

export default function Float() {
  return (
    <FloatWrap>
      <Gridline />
      <ResizeCanvas />
      <Layers />
    </FloatWrap>
  );
}

const FloatWrap = styled.div`
  position: fixed;
  bottom: 20px;
  right: 100px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  height: 50px;
  display: flex;
  min-width: 300px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  gap: 10px;
`;
