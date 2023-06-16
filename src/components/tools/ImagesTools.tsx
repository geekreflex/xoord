import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchImages } from '@/features/imagesSlice';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import Masonry from 'react-masonry-css';

export default function ImagesTool() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <Wrap>
      <Masonry breakpointCols={2} className="image-list">
        {data.map((image) => (
          <div key={image.id} className="image">
            <img src={image.src.medium} />
          </div>
        ))}
      </Masonry>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;

  .image-list {
    display: flex;
    gap: 5px;
  }

  .image {
    display: flex;
    margin-bottom: 5px;
    height: 23 0px;
    img {
      width: 100%;
    }
  }
`;
