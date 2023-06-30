import { styled } from 'styled-components';
import History from '../History';
import Zoom from '../Zoom';
import { LineY } from '@/styles/global';
import { IoHandRightOutline, IoSettingsOutline } from 'react-icons/io5';
import { FiDownload } from 'react-icons/fi';
import { BsCursor } from 'react-icons/bs';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect, useState } from 'react';

export default function BottomBar() {
  const [panMode, setPanMode] = useState(false);
  const { editor } = useEditorContext();

  useEffect(() => {
    setPanMode(editor?.panMode!);
  }, [editor]);

  const handlePanToggle = () => {
    if (editor) {
      editor.panMode ? editor.endPan() : editor.startPan();
      setPanMode(editor.panMode);
    }
  };

  const handleCursor = () => {
    setPanMode(false);
    editor?.endPan();
  };

  return (
    <Wrap>
      <div>
        <button className={`iconn`}>
          <IoSettingsOutline />
        </button>
      </div>
      <LineY />
      <div className="item-wrap">
        <button
          className={`iconn ${panMode ? 'icon-active' : ''}`}
          onClick={handlePanToggle}
        >
          <IoHandRightOutline />
        </button>
        <button
          className={`iconn ${!panMode ? 'icon-active' : ''}`}
          onClick={handleCursor}
        >
          <BsCursor />
        </button>
        <Zoom />
      </div>
      <LineY />
      <div className="item-wrap">
        <History />
      </div>
      <LineY />
      <button className="iconn">
        <FiDownload />
      </button>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-width: 200px;
  max-width: 600px;
  height: 45px;
  bottom: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.small};
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};

  .item-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
