import ImageList from '../shared/ImageList';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEffect } from 'react';
import { fetchBackgrounds } from '@/features/imagesSlice';
import { BtnWrap, Button, ToolWrap } from '@/styles/global';
import { BgIcon } from '@/icons';
import SearchInput from '../shared/SearchInput';
import { switchPropertyPanel } from '@/features/appSlice';
import { useEditorContext } from '@/context/EditorContext';

export default function BackgroundsTool() {
  const { editor } = useEditorContext();
  const dispatch = useAppDispatch();
  const { backgrounds, status, error } = useAppSelector(
    (state) => state.images
  );

  useEffect(() => {
    dispatch(fetchBackgrounds(1));
  }, [dispatch]);

  const showEditPanel = () => {
    editor?.canvas.discardActiveObject();
    editor?.canvas.renderAll();
    dispatch(switchPropertyPanel('background'));
  };

  return (
    <ToolWrap>
      <BtnWrap>
        <Button onClick={showEditPanel}>
          <span id="btn-icon">
            <BgIcon />
          </span>
          <span id="btn-text">Edit Background</span>
        </Button>
      </BtnWrap>
      <SearchInput placeholder="Search Backgrounds" />
      <ImageList
        images={backgrounds}
        type="background"
        status={status}
        error={error}
      />
    </ToolWrap>
  );
}
