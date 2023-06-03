import { useEditorContext } from '@/context/EditorContext';
import { BtnPrimary } from '@/styles/global';
import { styled } from 'styled-components';
import ColorBlock from '../properties/shared/ColorBlock';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setWorkspace } from '@/features/editorSlice';
import { toggleReszieTempleteModal } from '@/features/appSlice';

export default function CustomizeTool() {
  const dispatch = useAppDispatch();
  const { workspace } = useAppSelector((state) => state.editor);

  const { editor } = useEditorContext();
  const colors = [
    { color: '#18bd48' },
    { color: '#553da9' },
    { color: '#dc7780' },
    { color: '#93bee6' },
    { color: '#aab290' },
    { color: '#e8e8e8' },
    { color: '#7ac2b0' },
    { color: '#542a5d' },
    { color: '#cf7205' },
  ];

  useEffect(() => {
    if (editor && editor.workspace) {
      dispatch(setWorkspace({ fill: editor.workspace.fill }));
    }
  }, [editor]);

  const handleBgChange = (color: string) => {
    if (editor) {
      editor.setWorkspaceBg(color);
    }
  };

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    dispatch(setWorkspace({ fill: color }));
    handleBgChange(color);
  };

  const handleShowModal = () => {
    dispatch(toggleReszieTempleteModal(true));
  };

  return (
    <CustomizeWrap>
      <div className="cust-top">
        <BtnPrimary>
          <button onClick={handleShowModal}>Resize Template</button>
        </BtnPrimary>
        <p>
          1024 <span>&times;</span> 768px
        </p>
      </div>
      <div className="preset">
        <p>Background Color</p>
        <div className="bg-color-preset">
          <ColorBlock color={workspace.fill} onChange={handleColor} />
          {colors.map((color) => (
            <div
              onClick={() => handleBgChange(color.color)}
              className="block"
              style={{
                backgroundColor: color.color,
              }}
            ></div>
          ))}
        </div>
      </div>
    </CustomizeWrap>
  );
}

const CustomizeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .cust-top {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      text-align: center;
      font-size: 13px;
    }
  }
  .preset {
    padding: 15px;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    border-radius: ${(props) => props.theme.radius.medium};
    border: 1px solid ${(props) => props.theme.colors.borderColor};

    p {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  .bg-color-preset {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;

    .block {
      height: 35px;
      border-radius: ${(props) => props.theme.radius.small};
      border: 1px solid ${(props) => props.theme.colors.borderColor2};
      cursor: pointer;
    }
  }
`;
