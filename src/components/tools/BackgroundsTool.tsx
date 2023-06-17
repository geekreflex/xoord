import ImageList from '../shared/ImageList';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEffect } from 'react';
import { fetchBackgrounds } from '@/features/imagesSlice';
import { BtnWrap, Button, ToolWrap } from '@/styles/global';
import { BgIcon } from '@/icons';
import SearchInput from '../shared/SearchInput';

export default function BackgroundsTool() {
  const dispatch = useAppDispatch();
  const { backgrounds, status, error } = useAppSelector(
    (state) => state.images
  );

  useEffect(() => {
    dispatch(fetchBackgrounds(1));
  }, [dispatch]);

  return (
    <ToolWrap>
      <BtnWrap>
        <Button>
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
