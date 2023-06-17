import { useEditorContext } from '@/context/EditorContext';
import { Image } from '@/types/app';
import Masonry from 'react-masonry-css';
import { styled } from 'styled-components';

interface ImageListProps {
  images: Image[];
  type: 'image' | 'background';
}

export default function ImageList({ images, type }: ImageListProps) {
  const { tool, editor } = useEditorContext();

  const onAddImage = (imageUrl: string) => {
    if (type === 'image') {
      tool?.addImage(imageUrl);
    }

    if (type === 'background') {
      editor?.setBackgroundImage(imageUrl);
    }
  };

  return (
    <Wrap>
      <Masonry breakpointCols={2} className="image-list">
        {images.map((image, index) => (
          <div
            key={index}
            className="image"
            onClick={() => onAddImage(image.src.large)}
          >
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
