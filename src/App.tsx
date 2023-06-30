import { styled } from 'styled-components';
import Editor2 from './components2/Editor';
import Editor from './components/Editor';
import Providers from './context';
import GlobalCSS from './styles/global';
import View from './View';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { fetchFonts } from './features/fontsSlice';
import { SkeletonTheme } from 'react-loading-skeleton';

export default function App() {
  const dispatch = useAppDispatch();
  const router = createBrowserRouter([
    {
      path: '/',
      element: 'Hello',
    },
    {
      path: '/editor/old',
      element: <Editor2 />,
    },
    {
      path: '/editor/new',
      element: <Editor />,
    },
    {
      path: '/editor/view',
      element: <View />,
    },
  ]);

  useEffect(() => {
    dispatch(fetchFonts());
  }, []);

  return (
    <Wrap>
      <Providers>
        <GlobalCSS />
        <SkeletonTheme baseColor="#222" highlightColor="#444">
          <RouterProvider router={router} />
        </SkeletonTheme>
      </Providers>
    </Wrap>
  );
}

const Wrap = styled.div``;
