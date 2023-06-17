import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchImages } from '@/features/imagesSlice';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import ImageList from '../shared/ImageList';
import { BtnWrap, Button } from '@/styles/global';
import { AddImageIcon } from '@/icons';

export default function ImagesTool() {
  const dispatch = useAppDispatch();
  const { images, status, error } = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages(1));
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
            <AddImageIcon />
          </span>
          <span id="btn-text">Upload Image</span>
        </Button>
      </BtnWrap>
      <ImageList images={images} type="image" />
    </Wrap>
  );
}

const Wrap = styled.div``;
