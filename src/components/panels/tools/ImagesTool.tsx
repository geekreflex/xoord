import GridList from '@/components/GridList';
import SearchInput from '@/components/SearchInput';
import { AddImageIcon } from '@/icons';
import { BtnPrimary } from '@/styles/global';
import { styled } from 'styled-components';

export default function ImageTools() {
  return (
    <ImageToolWrap>
      <div className="image-tool-inner">
        <div className="image-upload-btn">
          <p>Upload images directly from your computer.</p>
          <BtnPrimary>
            <button>
              <span>
                <AddImageIcon />
              </span>
              Upload Image
            </button>
          </BtnPrimary>
        </div>
        <SearchInput />
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

  .image-upload-btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
