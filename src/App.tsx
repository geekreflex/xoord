import { styled } from 'styled-components';
import Editor from './components2/Editor';
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
      element: <Editor />,
    },
    {
      path: '/editor/new',
      element: <View />,
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
