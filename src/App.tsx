import { styled } from 'styled-components';
import Editor2 from './components2/Editor';
import Editor from './components/Editor';
import Providers from './context';
import GlobalCSS from './styles/global';
import View from './View';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export default function App() {
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

  return (
    <Wrap>
      <Providers>
        <GlobalCSS />
        <RouterProvider router={router} />
      </Providers>
    </Wrap>
  );
}

const Wrap = styled.div``;
