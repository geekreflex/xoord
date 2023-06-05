import GridList from '@/components/GridList';
import { ImageIcon } from '@/icons';
import { BtnPrimary } from '@/styles/global';
import { styled } from 'styled-components';

export default function ImageTools() {
  return (
    <ImageToolWrap>
      <div className="image-tool-inner">
        <div className="image-upload-btn">
          <BtnPrimary>
            <button>
              <span>
                <ImageIcon />
              </span>
              Upload Image
            </button>
          </BtnPrimary>
        </div>
        <GridList />
      </div>
    </ImageToolWrap>
  );
}

const ImageToolWrap = styled.div`
  .image-tool-inner {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
