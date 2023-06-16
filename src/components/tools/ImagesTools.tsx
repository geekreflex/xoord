import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchImages } from '@/features/imagesSlice';
import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Masonry from 'react-masonry-css';
import { useEditorContext } from '@/context/EditorContext';

export default function ImagesTool() {
  const dispatch = useAppDispatch();
  const { tool } = useEditorContext();
  const { data, page, status, error } = useAppSelector((state) => state.images);

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchImages(1));
  }, [dispatch]);

  const loadMore = () => {
    dispatch(fetchImages(page + 1));
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        loadMore();
      }
    });

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      if (observer.current && sentinelRef.current) {
        observer.current.unobserve(sentinelRef.current);
      }
    };
  }, [dispatch]);

  const onAddImage = (imageUrl: string) => {
    tool?.addImage(imageUrl);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Wrap>
      <Masonry breakpointCols={2} className="image-list">
        {data.map((image, index) => (
          <div
            key={index}
            className="image"
            onClick={() => onAddImage(image.src.large)}
          >
            <img src={image.src.medium} />
          </div>
        ))}
      </Masonry>
      <div ref={sentinelRef}></div>
      <button onClick={loadMore}>Load more</button>
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
    position: relative;
    display: flex;
    margin-bottom: 5px;
    height: 23 0px;
    cursor: pointer;
    border-radius: ${(props) => props.theme.radius.medium};
    overflow: hidden;

    img {
      width: 100%;
      transition: all 300ms;
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      z-index: 9;
      opacity: 0;
      transition: all 300ms;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
      &::before {
        opacity: 1;
      }
    }
  }
`;
