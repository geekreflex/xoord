import Icon from '../common/Icon';
import { styled } from 'styled-components';
import Popup from '../common/Popup';
import { useEffect, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { Input } from '../common/Input';

export default function Background() {
  const { editor } = useEditorContext();
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (editor) {
      setWidth(editor.workspace?.width || 0);
      setHeight(editor.workspace?.height || 0);
    }
  }, [editor]);

  return (
    <BgWrap>
      <Icon name="bgIcon" size="big" />
      <Popup title="Canvas Size">
        <BgMain>
          <div className="input-group">
            <Input value={width?.toString()} sin={'W'} onChange={() => {}} />
            <Input value={height?.toString()} sin={'H'} onChange={() => {}} />
          </div>
        </BgMain>
      </Popup>
    </BgWrap>
  );
}

const BgWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const BgMain = styled.div`
  display: flex;
  width: 400px;

  .input-group {
    display: flex;
    gap: 20px;
  }
`;
