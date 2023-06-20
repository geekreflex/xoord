import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchImages } from '@/features/imagesSlice';
import { AddImageIcon } from '@/icons';
import { Button } from '@/styles/global';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import ImageList from '../common/ImageList';

export default function ImagesTool() {
  const dispatch = useAppDispatch();
  const { images, status, error } = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages(1));
  }, []);

  return (
    <Wrap>
      <div className="btn-wrap">
        <Button>
          <span id="btn-icon">
            <AddImageIcon />
          </span>
          <span id="btn-text">Upload image</span>
        </Button>
      </div>
      <ImageList images={images} status={status} error={error} type="image" />
    </Wrap>
  );
}

const Wrap = styled.div``;
