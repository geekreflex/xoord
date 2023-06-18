import { useEditorContext } from '@/context/EditorContext';
import { Close2Icon } from '@/icons';
import { LineX } from '@/styles/global';
import { styled } from 'styled-components';
import TextProperties from './TextProperties';
import { useAppSelector } from '@/app/hooks';
import BackgroundProperties from './BackgroundProperties';

export default function PropertiesPanel() {
  const { propPanel } = useAppSelector((state) => state.app);
  const { clearSelectedObjects } = useEditorContext();

  const close = () => {
    clearSelectedObjects();
  };

  const panelTitle = () => {
    if (propPanel === 'textbox') {
      return 'Textbox';
    } else if (propPanel === 'circle') {
      return 'Circle';
    } else if (propPanel === 'background') {
      return 'Background';
    } else if (propPanel === 'selection') {
      return 'Selection';
    }
  };

  return (
    <Wrap visible={propPanel}>
      <div className="inner">
        <div className="property-header">
          <h3>{`${panelTitle()} properties` || 'Untitled'}</h3>
          <span id="close-icon" onClick={close}>
            <Close2Icon />
          </span>
        </div>
        <LineX />
        <div className="property-main">
          {propPanel === 'textbox' && <TextProperties />}
          {propPanel === 'background' && <BackgroundProperties />}
        </div>
      </div>
    </Wrap>
  );
}

interface WProps {
  visible: string | null;
}

const Wrap = styled.div<WProps>`
  position: fixed;
  right: 30px;
  top: 0;
  height: 100%;
  pointer-events: none;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  * {
    pointer-events: all;
  }

  .inner {
    background-color: ${(props) => props.theme.colors.panelBg};
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
    h3 {
      font-size: 16px;
    }
    #close-icon {
      cursor: pointer;
      display: flex;
    }
  }
`;
