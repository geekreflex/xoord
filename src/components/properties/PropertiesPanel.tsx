import { Close2Icon } from '@/icons';
import { LineX } from '@/styles/global';
import { styled } from 'styled-components';

export default function PropertiesPanel() {
  return (
    <Wrap>
      <div className="inner">
        <div className="property-header">
          <h3>Untitled</h3>
          <span id="close-icon">
            <Close2Icon />
          </span>
        </div>
        <LineX />
        <div className="property-main">hello</div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  right: 30px;
  top: 0;
  height: 100%;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    pointer-events: all;
  }

  .inner {
    background-color: ${(props) => props.theme.colors.primary};
    width: 280px;
    height: 80vh;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    box-shadow: ${(props) => props.theme.shadow.shadow1};
    padding: 10px 0;
  }

  .property-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    #close-icon {
      cursor: pointer;
      display: flex;
    }
  }
`;
