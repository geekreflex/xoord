import { styled } from 'styled-components';
import Tab from '../common/Tab';
import { useEffect, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { fabric } from 'fabric';
import { useAppSelector } from '@/app/hooks';
import { renderTitle } from '@/utils/string';

export default function LayerTool() {
  const { editor, selectedObjects } = useEditorContext();
  const [activeTab, setActiveTab] = useState('Layer');
  const tabList = [{ name: 'Layer' }, { name: 'Groups' }];
  const { object } = useAppSelector((state) => state.editor);
  const [objects, setObjects] = useState<fabric.Object[]>([]);

  useEffect(() => {
    if (editor) {
      const objs = editor.canvas.getObjects();
      const newObjs = objs.filter((obj) => obj.id !== 'workspace');
      setObjects(newObjs);
      console.log(newObjs);
    }
  }, [editor]);

  const handleClick = (id: string) => {
    const selected = editor?.canvas.getObjects().find((obj) => obj.id === id);
    editor?.canvas.setActiveObject(selected as any);
    editor?.canvas.renderAll();
  };

  return (
    <Wrap>
      <div className="">
        <Tab tabs={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div>
        {activeTab === 'Layer' && (
          <div className="layer-list">
            {objects?.map((obj) => (
              <div
                onClick={() => handleClick(obj.id as string)}
                key={obj.id}
                className={`layer-item ${
                  selectedObjects?.some((itm) => itm.id == obj.id)
                    ? 'active-obj'
                    : ''
                }`}
              >
                <div className="object-box">
                  {obj.type === 'image' && (
                    <img src={(obj.toJSON() as any).src} alt="" />
                  )}
                </div>
                <p>
                  {obj.type === 'textbox'
                    ? (obj as fabric.Textbox).text
                    : renderTitle(obj.type)}
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
    gap: 5px;

    .layer-item {
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      padding: 5px;
      display: flex;
      align-items: center;
      border-radius: ${(props) => props.theme.radius.small};
      background-color: ${(props) => props.theme.colors.hoverColor};
      cursor: pointer;
      gap: 10px;
      &:hover {
        background-color: ${(props) => props.theme.colors.accent}20;
        border-color: ${(props) => props.theme.colors.accent}30;
      }
    }

    .object-box {
      width: 32px;
      height: 32px;
      border: 1px solid ${(props) => props.theme.colors.borderColor};

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .active-obj {
      background-color: ${(props) => props.theme.colors.accent}20;
      border-color: ${(props) => props.theme.colors.accent}30;
    }
  }
`;
