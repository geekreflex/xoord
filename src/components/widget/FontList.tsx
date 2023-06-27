import { styled } from 'styled-components';
import Draggable from '../common/Draggable';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchFonts } from '@/features/fontsSlice';
import SearchInput from '../common/SearchInput';

interface FontListProps {
  close: () => void;
}

export default function FontList({ close }: FontListProps) {
  const dispatch = useAppDispatch();
  const { fonts } = useAppSelector((state) => state.fonts);
  useEffect(() => {
    dispatch(fetchFonts());
  }, []);

  return (
    <Draggable title="Font list" close={close}>
      <Wrap>
        <div className="font-list-top">
          <SearchInput
            query={'font'}
            placeholder="Search Fonts"
            onChange={() => {}}
          />
        </div>

        <div className="fonts-wrap">
          {fonts.map((font) => (
            <div>{font.family}</div>
          ))}
        </div>
      </Wrap>
    </Draggable>
  );
}

const Wrap = styled.div`
  width: 250px;
  min-height: 400px;
  max-height: 70vh;
  display: flex;
  flex-direction: column;

  .font-list-top {
    padding: 0 10px;
    margin-bottom: 10px;
  }

  .fonts-wrap {
    overflow-y: auto;
    flex: 1;
    height: 100%;
    padding: 0 10px;
  }
`;
