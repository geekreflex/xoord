import { styled } from 'styled-components';
import Tab from '../common/Tab';
import { useEffect, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { fabric } from 'fabric';
import { renderTitle } from '@/utils/string';
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoEyeSharp,
  IoLockClosed,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoLockOpenSharp,
} from 'react-icons/io5';
import Tooltip from '../common/Tooltip';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setObject } from '@/features/editorSlice';

export default function LayerTool() {
  const dispatch = useAppDispatch();
  const { editor, selectedObjects } = useEditorContext();
  const [activeTab, setActiveTab] = useState('Layer');
  const { object } = useAppSelector((state) => state.editor);
  const tabList = [{ name: 'Layer' }, { name: 'Groups' }];
  const [objects, setObjects] = useState<fabric.Object[]>([]);

  useEffect(() => {
    if (editor) {
      const objects = editor.canvas.getObjects();
      const filteredObjects = objects.filter(
        (object) => object.id !== 'workspace'
      );
      setObjects(filteredObjects);
    }
  }, [editor, selectedObjects]);

  const handleClick = (id: string) => {
    const selected = editor?.canvas.getObjects().find((obj) => obj.id === id);
    editor?.canvas.setActiveObject(selected as any);
    editor?.canvas.renderAll();
  };

  const handleLock = (obj: fabric.Object) => {
    obj.set({
      lockMovementX: !obj.lockMovementX,
      lockMovementY: !obj.lockMovementY,
      lockRotation: !obj.lockRotation,
      selectable: !obj.selectable,
    });
    dispatch(setObject(obj));
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
                <div className="layer-item-left">
                  <div className="object-box">
                    {obj.type === 'image' && (
                      <img src={(obj.toJSON() as any).src} alt="" />
                    )}
                  </div>
                  <p className="object-name">
                    {obj.type === 'textbox'
                      ? (obj as fabric.Textbox).text
                      : renderTitle(obj.type)}
                  </p>
                </div>
                <div className="layer-item-right">
                  <Tooltip
                    content={`${
                      object?.selectable ? 'Lock Layer' : 'Unlock Layer'
                    }`}
                  >
                    <button className="iconn" onClick={() => handleLock(obj)}>
                      {object?.selectable ? (
                        <IoLockOpenOutline />
                      ) : (
                        <IoLockClosedOutline />
                      )}
                    </button>
                  </Tooltip>
                  <Tooltip content="Hide Layer">
                    <button className="iconn">
                      <IoEyeOutline />
                    </button>
                  </Tooltip>
                </div>
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

        .layer-item-right {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    .layer-item-left {
      display: flex;
      align-items: center;
      width: 70%;
      gap: 10px;
    }

    .layer-item-right {
      display: flex;
      align-items: center;
      visibility: hidden;
      opacity: 0;

      .iconn {
        font-size: 16px;
        &:hover {
          background-color: transparent;
        }
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

    .object-name {
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      flex: 1;
      overflow: hidden;
    }

    .active-obj {
      background-color: ${(props) => props.theme.colors.accent}20;
      border-color: ${(props) => props.theme.colors.accent}30;
    }
  }
`;
