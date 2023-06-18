import { useEditorContext } from '@/context/EditorContext';
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowDownIcon } from '@/icons';
import { useRef, useState } from 'react';
import { styled } from 'styled-components';

export default function FontList() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { controller } = useEditorContext();
  const fonts = ['Arial', 'Ubuntu'];

  useClickOutside(ref, () => setVisible(false));

  return (
    <Wrap ref={ref}>
      <div className="font-select" onClick={() => setVisible(!visible)}>
        <span id="fs-text">{fonts[0]}</span>
        <span id="arr-icon">
          <ArrowDownIcon />
        </span>
      </div>
      {visible && (
        <div className="font-list-wrap">
          <div className="font-list">
            {fonts.map((font) => (
              <div
                key={font}
                className="font"
                style={{ fontFamily: font }}
                onClick={() => controller?.fontFamily(font.toLowerCase())}
              >
                {font}
              </div>
            ))}
          </div>
        </div>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  .font-select {
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    padding: 10px;
    height: 35px;
    display: flex;
    align-items: center;
    border-radius: ${(props) => props.theme.radius.medium};
    justify-content: space-between;
    cursor: pointer;
  }

  span {
    display: flex;
  }

  #fs-text {
    font-size: 14px;
  }

  #arr-icon {
    font-size: 11px;
    svg,
    path {
      stroke-width: 4px;
    }
  }

  .font-list-wrap {
    position: absolute;
    top: 40px;
    width: 100%;
    height: 300px;
    background-color: ${(props) => props.theme.colors.panelBg};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-radius: ${(props) => props.theme.radius.medium};
    box-shadow: ${(props) => props.theme.shadow.shadow1};
    padding: 5px 0;
  }
  .font-list {
    display: flex;
    flex-direction: column;
  }

  .font {
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;
