import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchImages } from '@/features/imagesSlice';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import ImageList from '../shared/ImageList';
import { BtnWrap, Button } from '@/styles/global';
import { AddImageIcon } from '@/icons';
import SearchInput from '../shared/SearchInput';

export default function ImagesTool() {
  const dispatch = useAppDispatch();
  const { images, status, error } = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages(1));
  }, [dispatch]);

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
      <SearchInput placeholder="Search Images" />
      <ImageList images={images} type="image" status={status} error={error} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
