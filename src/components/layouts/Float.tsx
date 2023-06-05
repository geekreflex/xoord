import { styled } from 'styled-components';
// import { Gridline } from '../toolbox';
import Layers from '../toolbox/Layers';

export default function Float() {
  return (
    <FloatWrap>
      {/* <Gridline /> */}
      <Layers />
    </FloatWrap>
  );
}

const FloatWrap = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 10px 20px;
  border-radius: ${(props) => props.theme.radius.small};
  display: flex;
  height: 50px;
  display: flex;
  min-width: 500px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border: 1px solid ${(props) => props.theme.colors.borderColor2};
  gap: 10px;
  transform: translateX(50%);
`;
