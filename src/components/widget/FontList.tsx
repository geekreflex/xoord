import { styled } from 'styled-components';
import Draggable from '../common/Draggable';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchFonts, setLoading } from '@/features/fontsSlice';
import SearchInput from '../common/SearchInput';
import { useEditorContext } from '@/context/EditorContext';
import WebFont from 'webfontloader';

interface FontListProps {
  close: () => void;
}

export default function FontList({ close }: FontListProps) {
  const dispatch = useAppDispatch();
  const { controller } = useEditorContext();
  const { fonts, status } = useAppSelector((state) => state.fonts);
  const [visibleFonts, setVisibleFonts] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const pageSize = 100;

  const loadMoreFonts = () => {
    // Calculate the number of fonts to load based on the current visible fonts
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const nextFonts = fonts.slice(startIndex, endIndex);

    // Load the next batch of fonts
    const fontFamilies = nextFonts.map((font) => font.family);
    dispatch(setLoading('loading'));

    WebFont.load({
      google: {
        families: fontFamilies,
      },
      active: () => {
        setVisibleFonts((prevFonts) => [...prevFonts, ...fontFamilies]);
        dispatch(setLoading('idle')); // Set loading to false when fonts are loaded
        setPage((prevPage) => prevPage + 1);
      },
    });
  };

  useEffect(() => {
    loadMoreFonts();
  }, []);

  useEffect(() => {
    // Attach a scroll event listener to the container
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      // Check if the user has scrolled to the bottom of the container
      const scrollHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;

      if (scrollHeight - scrollTop === clientHeight) {
        // User has reached the bottom, load more fonts

        loadMoreFonts();
      }
    }
  };

  const handleFont = (family: string) => {
    if (controller) {
      controller.fontFamily(family);
    }
  };

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

        <div className="fonts-wrap" ref={containerRef}>
          <ul>
            {visibleFonts.map((font) => (
              <li style={{ fontFamily: font }} onClick={() => handleFont(font)}>
                {font}
              </li>
            ))}
          </ul>
          {status === 'loading' && <div>Loading more fonts...</div>}
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

    ul,
    li {
      list-style: none;

      li {
        padding: 3px 10px;
        cursor: pointer;
        &:hover {
          background-color: ${(props) => props.theme.colors.hoverColor};
        }
      }
    }
  }
`;
