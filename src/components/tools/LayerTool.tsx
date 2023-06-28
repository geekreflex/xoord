import { styled } from 'styled-components';
import Tab from '../common/Tab';
import { useEffect, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { fabric } from 'fabric';

export default function LayerTool() {
  const { editor } = useEditorContext();
  const [activeTab, setActiveTab] = useState('Layer');
  const tabList = [{ name: 'Layer' }, { name: 'Groups' }];
  const [objects, setObjects] = useState<fabric.Object[]>([]);

  useEffect(() => {
    if (editor) {
      const objs = editor.canvas.getObjects();
      const newObjs = objs.filter((obj) => obj.id !== 'workspace');
      setObjects(newObjs);
    }
  }, [editor]);

  return (
    <Wrap>
      <div className="">
        <Tab tabs={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div>
        {activeTab === 'Layer' && (
          <div className="layer-list">
            {objects?.map((obj) => (
              <div key={obj.id} className="layer-item">
                <div className="object-box"></div>
                <p>
                  {obj.type === 'textbox'
                    ? (obj as fabric.Textbox).text
                    : obj.type}
                </p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'Groups' && <div></div>}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .layer-list {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .layer-item {
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      padding: 5px;
      display: flex;
      align-items: center;
      border-radius: ${(props) => props.theme.radius.small};
      /* height: 32px; */
      background-color: ${(props) => props.theme.colors.hoverColor};
      cursor: pointer;
      gap: 10px;
      &:hover {
        background-color: ${(props) => props.theme.colors.accent}40;
      }
    }

    .object-box {
      width: 25px;
      height: 25px;
      border: 1px solid ${(props) => props.theme.colors.borderColor};
    }
  }
`;
