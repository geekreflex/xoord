import GridList from '@/components/GridList';
import { BtnPrimary } from '@/styles/global';
import { styled } from 'styled-components';

export default function ImageTools() {
  return (
    <ImageToolWrap>
      <div>
        <div>
          <BtnPrimary>
            <button>Upload Image</button>
          </BtnPrimary>
        </div>
        <GridList />
      </div>
    </ImageToolWrap>
  );
}

const ImageToolWrap = styled.div``;
