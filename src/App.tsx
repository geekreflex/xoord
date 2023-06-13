import { styled } from 'styled-components';
import Editor from './components/Editor';
import Providers from './context';
import GlobalCSS from './styles/global';

export default function App() {
  return (
    <Wrap>
      <Providers>
        <GlobalCSS />
        <Editor />
      </Providers>
    </Wrap>
  );
}

const Wrap = styled.div``;
