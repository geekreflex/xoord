import { styled } from 'styled-components';
import ImageList from '../shared/ImageList';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEffect } from 'react';
import { fetchBackgrounds } from '@/features/imagesSlice';
import { BtnWrap, Button } from '@/styles/global';
import { BgIcon } from '@/icons';

export default function BackgroundsTool() {
  const dispatch = useAppDispatch();
  const { backgrounds, status, error } = useAppSelector(
    (state) => state.images
  );

  useEffect(() => {
    dispatch(fetchBackgrounds(1));
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Wrap>
      <BtnWrap>
        <Button>
          <span id="btn-icon">
            <BgIcon />
          </span>
          <span id="btn-text">Edit Background</span>
        </Button>
      </BtnWrap>
      <ImageList images={backgrounds} type="background" />
    </Wrap>
  );
}

const Wrap = styled.div``;
